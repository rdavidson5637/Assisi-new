'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PhoneLink } from '@/components/ContactLinks';
import { mailtoHref, site } from '@/data/site';

const tiers = [
  { amount: 6, label: 'Friend', blurb: 'Helps cover daily food and bedding for animals in our care.' },
  { amount: 12, label: 'Guardian', blurb: 'Contributes towards routine veterinary check-ups and vaccinations.' },
  { amount: 20, label: 'Champion', blurb: 'Supports the ongoing medical care of our long-stay and special needs animals.' },
];

export default function SponsorPage() {
  const [selected, setSelected] = useState<number>(tiers[0].amount);
  const [requested, setRequested] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink">Sponsorship</h1>
          <p className="text-xl text-ink/80 mt-2">Give a little every month, change a life every day</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-10">
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
                type="button"
                aria-pressed={selected === tier.amount}
                onClick={() => setSelected(tier.amount)}
                className={`text-left rounded-[8px] p-4 border transition-colors ${
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

          {requested ? (
            <div className="panel p-4" aria-live="polite">
              <p className="text-ink font-medium">
                To sponsor at £{selected} a month, call or email us.
              </p>
              <p className="text-ink/70 text-sm mt-1">
                You haven&apos;t been signed up or charged. Call <PhoneLink className="link" /> or{' '}
                <a
                  href={mailtoHref(
                    `Sponsorship: £${selected} a month`,
                    `Hello,\n\nI would like to sponsor Assisi at £${selected} a month. Please get in touch to set it up.\n\nName:\nPhone:\n`,
                  )}
                  className="link"
                >
                  email {site.email}
                </a>{' '}
                and we&apos;ll set up your sponsorship.
              </p>
              <button
                type="button"
                onClick={() => setRequested(false)}
                className="btn-secondary text-sm mt-3"
              >
                Change amount
              </button>
            </div>
          ) : (
            <button type="button" onClick={() => setRequested(true)} className="w-full btn-primary">
              Sponsor at £{selected} a month by phone or email
            </button>
          )}
        </div>

        <div className="panel p-6 md:p-8">
          <h2 className="text-xl font-bold text-ink mb-4">What Your Sponsorship Supports</h2>
          <ul className="space-y-3 text-ink/70">
            <li className="flex gap-3">
              <span aria-hidden className="text-ink">•</span>
              Daily food, bedding and warm shelter for every animal in our care
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-ink">•</span>
              Veterinary treatment, vaccinations, neutering and microchipping
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-ink">•</span>
              Extra care for our long-stay and special needs animals who take longer to rehome
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-ink">•</span>
              Our Outreach Scheme, helping families in the community keep and care for their pets
            </li>
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t border-line text-center">
          <p className="text-ink/70 mb-4">
            Prefer a one-off gift, or want to sponsor a specific animal? Visit our donation page.
          </p>
          <Link href="/donate" className="btn-secondary">
            Make a One-Time Donation
          </Link>
        </div>
      </div>
    </div>
  );
}
