'use client';

import { useState } from 'react';
import Link from 'next/link';
import { EmailLink, PhoneLink } from '@/components/ContactLinks';
import { site } from '@/data/site';

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState('');
  const [requested, setRequested] = useState(false);

  const amounts = [10, 25, 50, 100];
  const finalAmount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink">Make a Donation</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-lg text-ink/80">
            Every donation is a lifeline. Assisi relies on donations from individuals and organisations 
            within our community to keep our Sanctuary going. Your donation will make a huge difference 
            to the wellbeing of the animals in our care and help us to provide the much needed day to 
            day requirements to meet their welfare needs.
          </p>
        </div>

        <div className="panel p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-ink mb-6">Choose Your Donation</h2>

          <div className="flex rounded-[12px] border border-line p-1 mb-6">
            <button
              onClick={() => setDonationType('one-time')}
              className={`flex-1 py-2 px-4 rounded-[12px] font-medium transition-colors ${
                donationType === 'one-time'
                  ? 'bg-ink text-cream'
                  : 'text-ink/70'
              }`}
            >
              One-time
            </button>
            <button
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-2 px-4 rounded-[12px] font-medium transition-colors ${
                donationType === 'monthly'
                  ? 'bg-ink text-cream'
                  : 'text-ink/70'
              }`}
            >
              Monthly
            </button>
          </div>

          {/* Amount Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-ink/80 mb-3">
              Select Amount
            </label>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={`py-3 px-4 rounded-[12px] font-semibold border transition-colors ${
                    selectedAmount === amount
                      ? 'bg-ink text-cream border-ink'
                      : 'bg-cream text-ink/80 border-line hover:border-ink'
                  }`}
                >
                  £{amount}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/60">£</span>
              <input
                type="number"
                placeholder="Other amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="field pl-8"
                min="1"
              />
            </div>
          </div>

          {/* Submit */}
          {requested ? (
            <div className="panel p-4 text-center">
              <p className="text-ink font-medium">
                Thank you for choosing to give £{finalAmount}{donationType === 'monthly' ? ' a month' : ''}!
              </p>
              <p className="text-ink/70 text-sm mt-1">
                Online card payments are launching soon. For now, please call{' '}
                <PhoneLink className="underline" /> or email{' '}
                <EmailLink className="underline" /> and
                we&apos;ll take your donation over the phone or set up your standing order.
              </p>
            </div>
          ) : (
            <>
              <button
                onClick={() => setRequested(true)}
                className="w-full btn-primary"
                disabled={!finalAmount}
              >
                {donationType === 'monthly'
                  ? `Donate £${finalAmount || 0} per month`
                  : `Donate £${finalAmount || 0}`}
              </button>

              <p className="text-center text-sm text-ink/60 mt-4">
                Online card payments are not available on this page yet. You can still give by phone or email.
              </p>
            </>
          )}
        </div>

        {/* Other Ways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="panel p-6">
            <h3 className="text-lg font-bold text-ink mb-3">Sponsorship</h3>
            <p className="text-ink/70 mb-4">
              For as little as 20p a day, you could provide multiple unwanted and homeless animals 
              each year with warm shelter, food, medical care and the love and happiness they deserve 
              until they find their forever home.
            </p>
            <Link href="/sponsor" className="btn-secondary">
              Become a Sponsor →
            </Link>
          </div>

          <div className="panel p-6">
            <h3 className="text-lg font-bold text-ink mb-3">Leave a Legacy</h3>
            <p className="text-ink/70 mb-4">
              A gift left in your Will is a great way to ensure that your love of animals and 
              interest in their well-being is continued into the future.
            </p>
            <Link href="/legacy" className="btn-secondary">
              Learn More →
            </Link>
          </div>

          <div className="panel p-6">
            <h3 className="text-lg font-bold text-ink mb-3">Amazon WishList</h3>
            <p className="text-ink/70 mb-4">
              We always look forward to our Amazon deliveries! Many of our supporters like to help 
              us by buying things from the list that they know our animals will like.
            </p>
            <a 
              href={site.wishlistUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Wishlist →
            </a>
          </div>

          <div className="panel p-6">
            <h3 className="text-lg font-bold text-ink mb-3">Membership</h3>
            <p className="text-ink/70 mb-4">
              Your support helps us feed the animals in our care, give them excellent veterinary 
              treatment and provide them with toys and treats.
            </p>
            <Link href="/membership" className="btn-secondary">
              Become a Member →
            </Link>
          </div>
        </div>

        {/* Bank Details / Contact */}
        <div className="mt-8 panel p-6">
          <h3 className="font-bold text-ink mb-3">Other Ways to Donate</h3>
          <p className="text-ink/70">
            For bank transfer details, standing orders, or to discuss other ways to support us, 
            please contact us at{' '}
            <EmailLink className="underline" />
            {' '}or call{' '}
            <PhoneLink className="underline" />.
          </p>
        </div>
      </div>
    </div>
  );
}
