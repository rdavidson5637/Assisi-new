'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { EmailLink, PhoneLink } from '@/components/ContactLinks';
import { postEnquiry, type EnquiryState } from '@/lib/submit-enquiry';

const tiers = [
  { amount: 6, label: 'Friend', blurb: 'Helps cover daily food and bedding for animals in our care.' },
  { amount: 12, label: 'Guardian', blurb: 'Contributes towards routine veterinary check-ups and vaccinations.' },
  { amount: 20, label: 'Champion', blurb: 'Supports the ongoing medical care of our long-stay and special needs animals.' },
];

export default function SponsorPage() {
  const [selected, setSelected] = useState<number>(tiers[0].amount);
  const [status, setStatus] = useState<EnquiryState>('idle');
  const formId = useId();

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink">Sponsorship</h1>
          <p className="text-xl text-ink/80 mt-2">Give a little every month, change a life every day</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-prose space-y-4 mb-10">
          <p>
            For as little as 20p a day, you could provide multiple unwanted and homeless animals each
            year with warm shelter, food, medical care and the love and happiness they deserve until
            they find their forever home.
          </p>
          <p>
            Sponsorship doesn&apos;t fund one animal alone. It keeps the Sanctuary running so we can
            say yes to the next animal that needs us, whatever their story.
          </p>
        </div>

        <div className="panel p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-ink mb-6">Choose Your Monthly Sponsorship</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {tiers.map((tier) => (
              <button
                key={tier.amount}
                onClick={() => setSelected(tier.amount)}
                className={`text-left rounded-panel p-4 border transition-colors ${
                  selected === tier.amount
                    ? 'border-ink'
                    : 'border-line hover:border-ink'
                }`}
              >
                <div className="text-2xl font-bold text-ink">£{tier.amount}<span className="text-sm font-medium text-ink/60">/mo</span></div>
                <div className="font-semibold text-ink mt-1">{tier.label}</div>
                <p className="text-sm text-ink/70 mt-2">{tier.blurb}</p>
              </button>
            ))}
          </div>

          {status === 'sent' ? (
            <div className="panel p-4">
              <p className="text-ink font-medium">Request sent for £{selected} a month.</p>
              <p className="text-ink/70 text-sm mt-1">
                The team will contact you to set up the standing order. Nothing is taken until then.
              </p>
            </div>
          ) : status === 'unconfigured' || status === 'error' ? (
            <div className="panel p-4">
              <p className="text-ink font-medium">
                {status === 'error' ? "We couldn't send that." : 'Online sign-up is not connected yet.'}
              </p>
              <p className="text-ink/70 text-sm mt-1">
                Call <PhoneLink className="underline" /> or email <EmailLink className="underline" /> and
                we&apos;ll set up £{selected} a month.
              </p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={async (event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const tier = tiers.find((item) => item.amount === selected);
                setStatus('sending');
                const result = await postEnquiry({
                  kind: 'sponsor',
                  name: String(data.get('name') ?? ''),
                  email: String(data.get('email') ?? ''),
                  phone: String(data.get('phone') ?? ''),
                  amount: String(selected),
                  tier: tier?.label ?? '',
                  company: String(data.get('company') ?? ''),
                });
                setStatus(result);
              }}
            >
              <div className="sr-only" aria-hidden="true">
                <label htmlFor={`${formId}-company`}>Company</label>
                <input id={`${formId}-company`} name="company" tabIndex={-1} autoComplete="off" />
              </div>
              <div>
                <label htmlFor={`${formId}-name`} className="block text-sm font-medium text-ink/80 mb-1">Name *</label>
                <input id={`${formId}-name`} name="name" required autoComplete="name" className="field" />
              </div>
              <div>
                <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-ink/80 mb-1">Email *</label>
                <input id={`${formId}-email`} name="email" type="email" required autoComplete="email" className="field" />
              </div>
              <div>
                <label htmlFor={`${formId}-phone`} className="block text-sm font-medium text-ink/80 mb-1">Phone</label>
                <input id={`${formId}-phone`} name="phone" type="tel" autoComplete="tel" className="field" />
              </div>
              <button type="submit" className="w-full btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : `Request £${selected}/month sponsorship`}
              </button>
              <p className="text-sm text-ink/60">
                This asks the team to set up a standing order. It does not take a payment.
              </p>
            </form>
          )}
        </div>

        <div className="panel p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink mb-4">What Your Sponsorship Supports</h2>
          <ul className="space-y-3 text-ink/70">
            <li className="flex gap-3">
              <span aria-hidden className="text-teal">•</span>
              Daily food, bedding and warm shelter for every animal in our care
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-teal">•</span>
              Veterinary treatment, vaccinations, neutering and microchipping
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-teal">•</span>
              Extra care for our long-stay and special needs animals who take longer to rehome
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-teal">•</span>
              Our Outreach Scheme, helping families in the community keep and care for their pets
            </li>
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t border-line text-center">
          <p className="text-ink/70 mb-4">
            Prefer a one-off gift, or want to sponsor a specific animal? Visit our donation page.
          </p>
          <Link href="/donate" className="btn-secondary">
            Make a one-off donation
          </Link>
        </div>
      </div>
    </div>
  );
}
