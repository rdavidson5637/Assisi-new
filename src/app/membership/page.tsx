'use client';

import { useState } from 'react';
import { EmailLink, PhoneLink } from '@/components/ContactLinks';

const perks = [
  'Our Paw Prints magazine, posted to your door twice a year',
  'Invitation to our Annual General Meeting, with a vote on Sanctuary matters',
  '10% discount in all four Assisi charity shops',
  'The knowledge that your support helps feed, treat and shelter every animal in our care',
];

export default function MembershipPage() {
  const [requested, setRequested] = useState(false);

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink">Membership</h1>
          <p className="text-xl text-ink/80 mt-2">Become part of the Assisi family</p>
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
          <div className="panel p-6">
            <h2 className="text-xl font-bold text-ink mb-2">Annual Membership</h2>
            <div className="text-3xl font-bold text-ink mb-4">£15<span className="text-sm font-medium text-ink/60">/year</span></div>
            <ul className="space-y-2 text-sm text-ink/70 mb-6">
              {perks.map((perk) => (
                <li key={perk} className="flex gap-2">
                  <span aria-hidden className="text-teal">•</span>
                  {perk}
                </li>
              ))}
            </ul>

            {requested ? (
              <div className="panel p-4 text-center">
                <p className="text-ink font-medium">Thank you for joining Assisi!</p>
                <p className="text-ink/70 text-sm mt-1">
                  Online sign-up is launching soon. Call{' '}
                  <PhoneLink className="underline" /> or email{' '}
                  <EmailLink className="underline" /> and
                  we&apos;ll set up your membership.
                </p>
              </div>
            ) : (
              <button onClick={() => setRequested(true)} className="w-full btn-primary">
                Become a Member
              </button>
            )}
          </div>

          <div className="panel p-6">
            <h2 className="text-xl font-bold text-ink mb-3">Why Membership Matters</h2>
            <p className="text-ink/70 text-sm mb-4">
              As an independent charity, Assisi receives no government funding. Membership fees provide
              reliable, year-round income that lets us plan ahead — covering everything from routine
              vet bills to the day-to-day running of the Sanctuary.
            </p>
            <p className="text-ink/70 text-sm">
              Members are also invited to our AGM, where you can hear directly from the trustees and
              have your say on how Assisi moves forward.
            </p>
          </div>
        </div>

        <div className="panel p-6 text-center">
          <h2 className="text-xl font-bold text-ink mb-3">Have a Question?</h2>
          <p className="text-ink/70">
            Contact us at{' '}
            <EmailLink className="underline" />
            {' '}or call{' '}
            <PhoneLink className="underline" />.
          </p>
        </div>
      </div>
    </div>
  );
}
