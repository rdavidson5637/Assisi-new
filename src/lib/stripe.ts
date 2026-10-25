const SESSION_ID = /^cs_[a-zA-Z0-9_]+$/;

export function paymentsEnabled() {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.assisi-ni.org').replace(/\/$/, '');

function allowedOrigins() {
  const allowed = new Set<string>([SITE, 'https://www.assisi-ni.org', 'https://assisi-ni.org']);
  for (const key of ['VERCEL_URL', 'VERCEL_BRANCH_URL', 'VERCEL_PROJECT_PRODUCTION_URL'] as const) {
    const host = process.env[key];
    if (host) allowed.add(`https://${host}`);
  }
  return allowed;
}

export function requestOrigin(request: Request) {
  const host = (request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? '')
    .split(',')[0]
    ?.trim();
  const local = Boolean(host && /^(localhost|127\.0\.0\.1)(:\d+)?$/.test(host));
  const proto =
    request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim() || (local ? 'http' : 'https');
  const origin = host ? `${proto}://${host}` : '';
  if (origin && (allowedOrigins().has(origin) || local)) return origin;
  return SITE;
}

export async function createCheckoutSession(input: {
  origin: string;
  amountPounds: number;
  interval: 'once' | 'month';
  giftAid: boolean;
}) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return { error: 'unconfigured' as const };

  const body = new URLSearchParams();
  const monthly = input.interval === 'month';
  body.set('mode', monthly ? 'subscription' : 'payment');
  body.set('locale', 'en-GB');
  body.set('success_url', `${input.origin}/donate/thanks?session_id={CHECKOUT_SESSION_ID}`);
  body.set('cancel_url', `${input.origin}/donate/cancelled`);
  body.set('line_items[0][quantity]', '1');
  body.set('line_items[0][price_data][currency]', 'gbp');
  body.set('line_items[0][price_data][unit_amount]', String(input.amountPounds * 100));
  body.set(
    'line_items[0][price_data][product_data][name]',
    monthly ? 'Monthly donation to Assisi Animal Sanctuary' : 'Donation to Assisi Animal Sanctuary',
  );
  body.set(
    'line_items[0][price_data][product_data][description]',
    'Gift to The Friends of Assisi Animal Sanctuary, Conlig, Northern Ireland.',
  );
  if (monthly) {
    body.set('line_items[0][price_data][recurring][interval]', 'month');
    body.set('subscription_data[metadata][gift_aid]', input.giftAid ? 'yes' : 'no');
  } else {
    body.set('submit_type', 'donate');
  }
  body.set('metadata[gift_aid]', input.giftAid ? 'yes' : 'no');
  if (input.giftAid) {
    body.set('billing_address_collection', 'required');
    body.set('phone_number_collection[enabled]', 'true');
  }

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  const payload = (await response.json()) as { url?: string; error?: { message?: string } };
  if (!response.ok || !payload.url) {
    return { error: 'upstream' as const };
  }
  return { url: payload.url };
}

export type PaidSession = {
  amountPounds: number;
  monthly: boolean;
  giftAid: boolean;
  email: string | null;
};

export async function readPaidSession(sessionId: string): Promise<PaidSession | null> {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || !SESSION_ID.test(sessionId)) return null;

  const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
    headers: { Authorization: `Bearer ${key}` },
    cache: 'no-store',
  });
  if (!response.ok) return null;

  const session = (await response.json()) as {
    status?: string;
    payment_status?: string;
    mode?: string;
    amount_total?: number | null;
    customer_details?: { email?: string | null };
    metadata?: { gift_aid?: string };
  };

  const paid = session.payment_status === 'paid' || session.status === 'complete';
  if (!paid || session.amount_total == null) return null;

  return {
    amountPounds: session.amount_total / 100,
    monthly: session.mode === 'subscription',
    giftAid: session.metadata?.gift_aid === 'yes',
    email: session.customer_details?.email ?? null,
  };
}
