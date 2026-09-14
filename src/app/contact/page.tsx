'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { sanctuary, shops } from '@/data/shops';

const subjects = [
  'General enquiry',
  'Adopting an animal',
  'Volunteering',
  'Outreach / need help keeping a pet',
  'Donation or legacy',
  'Shops',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mapQuery = encodeURIComponent(
    `${sanctuary.address}, ${sanctuary.town} ${sanctuary.postcode}`
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        title="Contact us"
        subtitle="Visit the sanctuary, call, or send a message. We’d rather you asked than wondered."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Sanctuary</h2>
            <div className="space-y-5 text-gray-600 mb-8">
              <p>
                {sanctuary.name}<br />
                {sanctuary.address}<br />
                {sanctuary.town}<br />
                {sanctuary.postcode}
              </p>
              <p>
                <a href={`tel:${sanctuary.phone.replace(/\s/g, '')}`} className="font-semibold text-gray-900 hover:underline">
                  {sanctuary.phone}
                </a>
                <br />
                <a href={`mailto:${sanctuary.email}`} className="font-semibold text-gray-900 hover:underline">
                  {sanctuary.email}
                </a>
              </p>
              <p>
                {sanctuary.hours}<br />
                {sanctuary.sunday}
              </p>
            </div>

            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200 mb-8">
              <iframe
                title="Map of Assisi Animal Sanctuary"
                src={`https://maps.google.com/maps?q=${mapQuery}&z=14&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <h3 className="font-bold text-gray-900 mb-3">Charity shops</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {shops.map((shop) => (
                <li key={shop.id}>
                  <span className="font-medium text-gray-900">{shop.name}</span>
                  {' · '}
                  {shop.address}
                  {' · '}
                  <a href={`tel:${shop.phone.replace(/\s/g, '')}`} className="underline">
                    {shop.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-green-800 mb-2">Message sent</h2>
                <p className="text-green-700">
                  Thank you. We’ll get back to you as soon as we can — during opening hours if you
                  need us sooner, the phone is the fastest route.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-green-800 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="contact-subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white"
                  >
                    {subjects.map((subject) => (
                      <option key={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>
                <button type="submit" className="w-full btn-secondary">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
