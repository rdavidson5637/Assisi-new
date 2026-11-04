'use client';

import { useState } from 'react';

const perks = [
  'Our Paw Prints magazine, posted to your door twice a year',
  'Invitation to our Annual General Meeting, with a vote on Sanctuary matters',
  '10% discount in all four Assisi charity shops',
  'The knowledge that your support helps feed, treat and shelter every animal in our care',
];

export default function MembershipPage() {
  const [requested, setRequested] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="bg-paper border-b border-line py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wide text-gray-700 mb-2">
            Assisi Animal Sanctuary
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900">Membership</h1>
          <p className="text-xl text-gray-700 mt-3">Become part of the Assisi family</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-8">
          <p>
            Your support helps us feed the animals in our care, give them excellent veterinary
            treatment and provide them with toys and treats. Becoming a member is a simple way to back
            our work year-round, and have a real say in how the Sanctuary is run.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="panel p-6 border">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Annual Membership</h2>
            <div className="text-3xl font-bold text-gray-900 mb-4">£15<span className="text-sm font-medium text-gray-500">/year</span></div>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              {perks.map((perk) => (
                <li key={perk} className="flex gap-2">
                  <span aria-hidden className="text-gray-900">•</span>
                  {perk}
                </li>
              ))}
            </ul>

            {requested ? (
              <div className="panel p-4 text-center" role="status">
                <p className="text-gray-900 font-bold">To become a member, get in touch with us.</p>
                <p className="text-gray-700 text-sm mt-1">
                  Call{' '}
                  <a href="tel:02891812622" className="link">028 9181 2622</a> or email{' '}
                  <a
                    href={`mailto:info@assisi-ni.org?subject=${encodeURIComponent('Membership: £15 a year')}`}
                    className="link"
                  >
                    info@assisi-ni.org
                  </a>{' '}
                  and we&apos;ll set up your membership. You can&apos;t join or pay on this website,
                  and nothing has been charged.
                </p>
              </div>
            ) : (
              <button type="button" onClick={() => setRequested(true)} className="w-full btn-secondary">
                How to become a member
              </button>
            )}
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Why Membership Matters</h2>
            <p className="text-gray-600 text-sm mb-4">
              As an independent charity, Assisi receives no government funding. Membership fees provide
              reliable, year-round income that lets us plan ahead, covering everything from routine
              vet bills to the day-to-day running of the Sanctuary.
            </p>
            <p className="text-gray-600 text-sm">
              Members are also invited to our AGM, where you can hear directly from the trustees and
              have your say on how Assisi moves forward.
            </p>
          </div>
        </div>

        <div className="panel p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Have a Question?</h2>
          <p className="text-gray-600">
            Contact us at{' '}
            <a href="mailto:info@assisi-ni.org" className="link">info@assisi-ni.org</a>
            {' '}or call{' '}
            <a href="tel:02891812622" className="link">028 9181 2622</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
