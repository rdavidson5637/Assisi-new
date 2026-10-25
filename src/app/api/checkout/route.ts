import { createCheckoutSession, requestOrigin } from '@/lib/stripe';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, reason: 'invalid' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return Response.json({ ok: false, reason: 'invalid' }, { status: 400 });
  }

  const { amount, interval, giftAid } = body as {
    amount?: unknown;
    interval?: unknown;
    giftAid?: unknown;
  };

  if (typeof amount !== 'number' || !Number.isInteger(amount) || amount < 1 || amount > 10000) {
    return Response.json({ ok: false, reason: 'amount' }, { status: 400 });
  }
  if (interval !== 'once' && interval !== 'month') {
    return Response.json({ ok: false, reason: 'interval' }, { status: 400 });
  }

  const result = await createCheckoutSession({
    origin: requestOrigin(request),
    amountPounds: amount,
    interval,
    giftAid: giftAid === true,
  });

  if (result.error === 'unconfigured') {
    return Response.json({ ok: false, reason: 'unconfigured' }, { status: 503 });
  }
  if (result.error) {
    return Response.json({ ok: false, reason: 'upstream' }, { status: 502 });
  }
  return Response.json({ ok: true, url: result.url });
}
