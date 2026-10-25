import { tooManyRequests } from '@/lib/rate-limit';

const KINDS = ['contact', 'adoption', 'volunteer', 'newsletter', 'sponsor', 'membership'] as const;
type Kind = (typeof KINDS)[number];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUIRED: Record<Kind, string[]> = {
  contact: ['name', 'email', 'message'],
  adoption: ['animal', 'firstName', 'lastName', 'email', 'phone', 'address', 'about'],
  volunteer: ['name', 'email', 'role'],
  newsletter: ['email'],
  sponsor: ['name', 'email', 'amount', 'tier'],
  membership: ['name', 'email'],
};

function isKind(value: unknown): value is Kind {
  return typeof value === 'string' && (KINDS as readonly string[]).includes(value);
}

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

  const data = body as Record<string, unknown>;
  if (typeof data.company === 'string' && data.company.trim()) {
    return Response.json({ ok: true });
  }
  if (!isKind(data.kind)) {
    return Response.json({ ok: false, reason: 'kind' }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(data)) {
    if (key === 'kind' || key === 'company') continue;
    if (typeof value !== 'string' || value.length > 5000) {
      return Response.json({ ok: false, reason: 'invalid' }, { status: 400 });
    }
    fields[key] = value.trim();
  }

  for (const key of REQUIRED[data.kind]) {
    if (!fields[key]) return Response.json({ ok: false, reason: 'missing' }, { status: 400 });
  }
  if (!EMAIL.test(fields.email ?? '')) {
    return Response.json({ ok: false, reason: 'email' }, { status: 400 });
  }

  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'local';
  if (tooManyRequests(ip)) {
    return Response.json({ ok: false, reason: 'rate' }, { status: 429 });
  }

  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId || !/^[A-Za-z0-9]+$/.test(formId)) {
    return Response.json({ ok: false, reason: 'unconfigured' }, { status: 503 });
  }

  const subject = {
    contact: `Website message from ${fields.name}`,
    adoption: `Rehoming application for ${fields.animal}`,
    volunteer: `Volunteer enquiry from ${fields.name}`,
    newsletter: `Newsletter signup ${fields.email}`,
    sponsor: `Sponsorship request: £${fields.amount}/month`,
    membership: `Membership request from ${fields.name}`,
  }[data.kind];

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ _subject: subject, kind: data.kind, ...fields }),
  });

  if (!response.ok) {
    return Response.json({ ok: false, reason: 'upstream' }, { status: 502 });
  }
  return Response.json({ ok: true });
}
