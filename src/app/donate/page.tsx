'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DonatePage() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState('');
  const [requested, setRequested] = useState(false);

  const amounts = [10, 25, 50, 100];
  const finalAmount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-yellow-400 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Make a Donation</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-lg text-gray-700">
            Every donation is a lifeline. Assisi relies on donations from individuals and organisations 
            within our community to keep our Sanctuary going. Your donation will make a huge difference 
            to the wellbeing of the animals in our care and help us to provide the much needed day to 
            day requirements to meet their welfare needs.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Choose Your Donation</h2>

          {/* One-time vs Monthly */}
          <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
            <button
              onClick={() => setDonationType('one-time')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                donationType === 'one-time'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              One-time
            </button>
            <button
              onClick={() => setDonationType('monthly')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
                donationType === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
          </div>

          {/* Amount Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
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
                  className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                    selectedAmount === amount
                      ? 'bg-yellow-400 text-gray-900'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  £{amount}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
              <input
                type="number"
                placeholder="Other amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                min="1"
              />
            </div>
          </div>

          {/* Submit */}
          {requested ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-green-800 font-medium">
                Thank you for choosing to give £{finalAmount}{donationType === 'monthly' ? ' a month' : ''}!
              </p>
              <p className="text-green-700 text-sm mt-1">
                Online card payments are launching soon. For now, please call{' '}
                <a href="tel:02891812622" className="underline">028 9181 2622</a> or email{' '}
                <a href="mailto:info@assisi-ni.org" className="underline">info@assisi-ni.org</a> and
                we&apos;ll take your donation over the phone or set up your standing order.
              </p>
            </div>
          ) : (
            <>
              <button
                onClick={() => setRequested(true)}
                className="w-full btn-secondary text-lg py-3"
                disabled={!finalAmount}
              >
                {donationType === 'monthly'
                  ? `Donate £${finalAmount || 0} per month`
                  : `Donate £${finalAmount || 0}`}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Secure payment. Your donation is tax-deductible.
              </p>
            </>
          )}
        </div>

        {/* Other Ways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Sponsorship</h3>
            <p className="text-gray-600 mb-4">
              For as little as 20p a day, you could provide multiple unwanted and homeless animals 
              each year with warm shelter, food, medical care and the love and happiness they deserve 
              until they find their forever home.
            </p>
            <Link href="/sponsor" className="text-gray-900 font-semibold hover:underline">
              Become a Sponsor →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Leave a Legacy</h3>
            <p className="text-gray-600 mb-4">
              A gift left in your Will is a great way to ensure that your love of animals and 
              interest in their well-being is continued into the future.
            </p>
            <Link href="/legacy" className="text-gray-900 font-semibold hover:underline">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Amazon WishList</h3>
            <p className="text-gray-600 mb-4">
              We always look forward to our Amazon deliveries! Many of our supporters like to help 
              us by buying things from the list that they know our animals will like.
            </p>
            <a 
              href="https://www.amazon.co.uk/hz/wishlist/ls/example" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 font-semibold hover:underline"
            >
              View Wishlist →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Membership</h3>
            <p className="text-gray-600 mb-4">
              Your support helps us feed the animals in our care, give them excellent veterinary 
              treatment and provide them with toys and treats.
            </p>
            <Link href="/membership" className="text-gray-900 font-semibold hover:underline">
              Become a Member →
            </Link>
          </div>
        </div>

        {/* Bank Details / Contact */}
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">Other Ways to Donate</h3>
          <p className="text-gray-600">
            For bank transfer details, standing orders, or to discuss other ways to support us, 
            please contact us at{' '}
            <a href="mailto:info@assisi-ni.org" className="underline">info@assisi-ni.org</a>
            {' '}or call{' '}
            <a href="tel:02891812622" className="underline">028 9181 2622</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
