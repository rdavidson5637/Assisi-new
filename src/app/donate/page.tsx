'use client';

import { useState } from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { sanctuary } from '@/data/shops';

const amounts = [
  { value: 10, impact: 'A week of food for a dog in our kennels' },
  { value: 25, impact: 'Vaccinations and a health check for a cat' },
  { value: 50, impact: 'Towards neutering and microchipping' },
  { value: 100, impact: 'Emergency vet treatment when it can’t wait' },
];

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState('');
  const [giftAid, setGiftAid] = useState(true);
  const [requested, setRequested] = useState(false);

  const finalAmount = selectedAmount || (customAmount ? parseInt(customAmount, 10) : 0);
  const selectedImpact = amounts.find((a) => a.value === selectedAmount)?.impact;
  const giftAidExtra = giftAid && finalAmount ? Math.round(finalAmount * 0.25 * 100) / 100 : 0;
  const giftLabel = `£${finalAmount || 0}${donationType === 'monthly' ? ' a month' : ''}`;
  const mailSubject = encodeURIComponent(
    `Donation: ${giftLabel}${giftAid ? ' (with Gift Aid)' : ''}`
  );

  return (
    <div className="min-h-screen">
      <PageHero
        title="Make a donation"
        subtitle="Assisi receives no government funding. Your gift feeds animals, pays vet bills, and keeps the sanctuary doors open."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 panel p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Choose your donation</h2>

            <div className="flex rounded-lg border border-line p-1 mb-6">
              <button
                type="button"
                onClick={() => setDonationType('one-time')}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  donationType === 'one-time' ? 'bg-ink text-paper' : 'text-gray-600'
                }`}
              >
                One-time
              </button>
              <button
                type="button"
                onClick={() => setDonationType('monthly')}
                className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                  donationType === 'monthly' ? 'bg-ink text-paper' : 'text-gray-600'
                }`}
              >
                Monthly
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {amounts.map((amount) => (
                <button
                  key={amount.value}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amount.value);
                    setCustomAmount('');
                  }}
                  className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                    selectedAmount === amount.value
                      ? 'bg-ink text-paper border border-gray-900'
                      : 'border border-line text-gray-900 hover:border-gray-900'
                  }`}
                >
                  £{amount.value}
                </button>
              ))}
            </div>

            {selectedImpact ? (
              <p className="text-sm text-gray-600 mb-4">{selectedImpact}</p>
            ) : null}

            <div className="relative mb-6">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
              <input
                type="number"
                placeholder="Other amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                min="1"
                aria-label="Other donation amount in pounds"
              />
            </div>

            <label className="flex items-start gap-3 mb-6 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={giftAid}
                onChange={(e) => setGiftAid(e.target.checked)}
                className="mt-1 rounded border-gray-300 accent-gray-900"
              />
              <span>
                Add Gift Aid. If you&apos;re a UK taxpayer we can claim 25p extra from HMRC on every
                £1 you give
                {giftAidExtra ? `. That’s an extra £${giftAidExtra.toFixed(2)} on this gift.` : '.'}
              </span>
            </label>

            <p className="text-sm text-gray-700 mb-4">
              We can&apos;t take card payments on this website. Your gift is arranged by phone or
              email with our team.
            </p>

            {requested && finalAmount ? (
              <div className="panel p-4" role="status">
                <p className="text-gray-900 font-bold">To give {giftLabel}, get in touch with us:</p>
                <ul className="text-gray-700 text-sm mt-2 space-y-1">
                  <li>
                    Call{' '}
                    <a href={`tel:${sanctuary.phone.replace(/\s/g, '')}`} className="link">
                      {sanctuary.phone}
                    </a>
                  </li>
                  <li>
                    Email{' '}
                    <a href={`mailto:${sanctuary.email}?subject=${mailSubject}`} className="link">
                      {sanctuary.email}
                    </a>
                  </li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  We&apos;ll take the donation over the phone or set up a bank transfer or standing
                  order. Nothing has been charged.
                </p>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setRequested(true)}
                className="w-full btn-secondary text-lg py-3"
                disabled={!finalAmount}
              >
                How to give {giftLabel}
              </button>
            )}
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="bg-ink text-paper rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Cat Intake Unit appeal</h3>
              <p className="text-gray-300 text-sm mb-4">
                Incoming cats need a dedicated assessment space. Gifts to this appeal go towards
                building it.
              </p>
              <p className="text-sm text-gray-300">Every pound helps us get there.</p>
            </div>

            <div className="panel p-6 space-y-4">
              <h3 className="font-bold text-gray-900">Other ways to give</h3>
              <Link href="/sponsor" className="block font-bold link">
                Monthly sponsorship →
              </Link>
              <Link href="/membership" className="block font-bold link">
                Become a member →
              </Link>
              <Link href="/legacy" className="block font-bold link">
                Leave a gift in your Will →
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              Bank transfers and standing orders: email{' '}
              <a href={`mailto:${sanctuary.email}`} className="link">{sanctuary.email}</a> or
              call{' '}
              <a href={`tel:${sanctuary.phone.replace(/\s/g, '')}`} className="link">
                {sanctuary.phone}
              </a>
              .
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
