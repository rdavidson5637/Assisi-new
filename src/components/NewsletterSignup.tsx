'use client';

import { useId, useState } from 'react';
import { site } from '@/data/site';
import { postEnquiry, type EnquiryState } from '@/lib/submit-enquiry';

interface NewsletterSignupProps {
  variant?: 'light' | 'dark';
}

export default function NewsletterSignup({ variant = 'light' }: NewsletterSignupProps) {
  const [status, setStatus] = useState<EnquiryState>('idle');
  const id = useId();
  const onDark = variant === 'dark';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus('sending');
    const result = await postEnquiry({
      kind: 'newsletter',
      email: String(data.get('email') ?? ''),
      company: String(data.get('company') ?? ''),
    });
    setStatus(result);
  };

  if (status === 'sent') {
    return (
      <p className={onDark ? 'text-cream' : 'text-ink'}>
        You&apos;re on the list. The sanctuary will be in touch with news and animals looking for homes.
      </p>
    );
  }

  if (status === 'unconfigured' || status === 'error') {
    return (
      <p className={onDark ? 'text-cream/80' : 'text-ink/80'}>
        {status === 'error'
          ? `That signup didn't send. Email ${site.email} and ask to be added.`
          : `The list is not connected yet. Email ${site.email} and ask to be added.`}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <label htmlFor={`${id}-email`} className="sr-only">
        Email address
      </label>
      <input
        id={`${id}-email`}
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Your email address"
        className="field flex-1"
      />
      <button type="submit" className="btn-primary whitespace-nowrap" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Stay in touch'}
      </button>
    </form>
  );
}
