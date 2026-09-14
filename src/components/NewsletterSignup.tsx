'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'light' | 'dark';
}

export default function NewsletterSignup({ variant = 'light' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className={variant === 'dark' ? 'text-yellow-300 font-medium' : 'text-gray-800 font-medium'}>
        You&apos;re on the list. We&apos;ll be in touch with sanctuary news and animals looking for homes.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
      />
      <button type="submit" className="btn-primary whitespace-nowrap">
        Stay in touch
      </button>
    </form>
  );
}
