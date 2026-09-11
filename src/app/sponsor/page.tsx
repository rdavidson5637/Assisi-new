'use client';

import { useState } from 'react';
import Link from 'next/link';

const tiers = [
  { amount: 6, label: 'Friend', blurb: 'Helps cover daily food and bedding for animals in our care.' },
  { amount: 12, label: 'Guardian', blurb: 'Contributes towards routine veterinary check-ups and vaccinations.' },
  { amount: 20, label: 'Champion', blurb: 'Supports the ongoing medical care of our long-stay and special needs animals.' },
];

export default function SponsorPage() {
  const [selected, setSelected] = useState<number>(tiers[0].amount);
  const [requested, setRequested] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-yellow-400 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Sponsorship</h1>
          <p className="text-xl text-gray-800 mt-2">Give a little every month, change a life every day</p>
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
            Sponsorship doesn&apos;t fund one animal alone — it keeps the Sanctuary running so we can
            say yes to the next animal that needs us, whatever their story.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Choose Your Monthly Sponsorship</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {tiers.map((tier) => (
              <button
                key={tier.amount}
                onClick={() => setSelected(tier.amount)}
                className={`text-left rounded-xl p-4 border-2 transition-colors ${
                  selected === tier.amount
                    ? 'border-yellow-400 bg-yellow-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl font-bold text-gray-900">£{tier.amount}<span className="text-sm font-medium text-gray-500">/mo</span></div>
                <div className="font-semibold text-gray-800 mt-1">{tier.label}</div>
                <p className="text-sm text-gray-600 mt-2">{tier.blurb}</p>
              </button>
            ))}
          </div>

          {requested ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">
                Thank you for choosing to sponsor at £{selected}/month!
              </p>
              <p className="text-green-700 text-sm mt-1">
                Online sign-up is launching soon. Call{' '}
                <a href="tel:02891812622" className="underline">028 9181 2622</a> or email{' '}
                <a href="mailto:info@assisi-ni.org" className="underline">info@assisi-ni.org</a> and
                we&apos;ll get your sponsorship set up.
              </p>
            </div>
          ) : (
            <button onClick={() => setRequested(true)} className="w-full btn-secondary text-lg py-3">
              Sponsor for £{selected}/month
            </button>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What Your Sponsorship Supports</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span aria-hidden className="text-yellow-500">•</span>
              Daily food, bedding and warm shelter for every animal in our care
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-yellow-500">•</span>
              Veterinary treatment, vaccinations, neutering and microchipping
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-yellow-500">•</span>
              Extra care for our long-stay and special needs animals who take longer to rehome
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="text-yellow-500">•</span>
              Our Outreach Scheme, helping families in the community keep and care for their pets
            </li>
          </ul>
        </div>

        <div className="mt-10 pt-8 border-t text-center">
          <p className="text-gray-600 mb-4">
            Prefer a one-off gift, or want to sponsor a specific animal? Visit our donation page.
          </p>
          <Link href="/donate" className="btn-outline">
            Make a One-Time Donation
          </Link>
        </div>
      </div>
    </div>
  );
}
