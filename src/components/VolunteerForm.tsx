'use client';

import { useState } from 'react';

const roles = [
  'Sanctuary — dogs, cats or small animals',
  'Reception / admin',
  'Charity shop',
  'Transport driver',
  'Fostering',
  'Fundraising & events',
  'Corporate team',
  'Placement / work experience',
];

export default function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-green-800 mb-2">Thanks — we&apos;ll be in touch</h3>
        <p className="text-green-700">
          Someone from the team will contact you about availability and the next step. If a
          particular day is full, we&apos;ll suggest another.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="vol-name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            id="vol-name"
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="vol-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            id="vol-email"
            type="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label htmlFor="vol-phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          id="vol-phone"
          type="tel"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="vol-role" className="block text-sm font-medium text-gray-700 mb-1">
          I&apos;m interested in *
        </label>
        <select
          id="vol-role"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-white"
        >
          <option value="">Choose a role</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="vol-message" className="block text-sm font-medium text-gray-700 mb-1">
          A little about you
        </label>
        <textarea
          id="vol-message"
          rows={4}
          placeholder="Days you might be free, experience with animals, or anything we should know."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
        />
      </div>
      <button type="submit" className="w-full btn-secondary">
        Send enquiry
      </button>
    </form>
  );
}
