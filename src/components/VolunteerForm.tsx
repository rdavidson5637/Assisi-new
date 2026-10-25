'use client';

import { useId, useState } from 'react';
import { EmailLink, PhoneLink } from '@/components/ContactLinks';
import { postEnquiry, type EnquiryState } from '@/lib/submit-enquiry';

const roles = [
  'Sanctuary: dogs, cats or small animals',
  'Reception / admin',
  'Charity shop',
  'Transport driver',
  'Fostering',
  'Fundraising and events',
  'Corporate team',
  'Placement / work experience',
];

export default function VolunteerForm() {
  const [status, setStatus] = useState<EnquiryState>('idle');
  const formId = useId();
  const id = (name: string) => `${formId}-${name}`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setStatus('sending');
    const result = await postEnquiry({
      kind: 'volunteer',
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      role: String(data.get('role') ?? ''),
      message: String(data.get('message') ?? ''),
      company: String(data.get('company') ?? ''),
    });
    setStatus(result);
  };

  if (status === 'sent') {
    return (
      <div>
        <h3 className="text-lg font-bold text-ink mb-2">Enquiry sent</h3>
        <p className="text-ink/80">
          The team has your note and will contact you about availability. If a particular day is
          full, they&apos;ll suggest another.
        </p>
      </div>
    );
  }

  if (status === 'unconfigured' || status === 'error') {
    return (
      <div>
        <h3 className="text-lg font-bold text-ink mb-2">
          {status === 'error' ? "We couldn't send that" : 'The form is not connected yet'}
        </h3>
        <p className="text-ink/80">
          Email <EmailLink className="underline" /> or call <PhoneLink className="underline" /> and
          say which role you&apos;re interested in.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-4">
          Edit enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={id('company')}>Company</label>
        <input id={id('company')} name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor={id('name')} className="block text-sm font-medium text-ink/80 mb-1">
            Name *
          </label>
          <input id={id('name')} name="name" type="text" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor={id('email')} className="block text-sm font-medium text-ink/80 mb-1">
            Email *
          </label>
          <input id={id('email')} name="email" type="email" required autoComplete="email" className="field" />
        </div>
      </div>
      <div>
        <label htmlFor={id('phone')} className="block text-sm font-medium text-ink/80 mb-1">
          Phone
        </label>
        <input id={id('phone')} name="phone" type="tel" autoComplete="tel" className="field" />
      </div>
      <div>
        <label htmlFor={id('role')} className="block text-sm font-medium text-ink/80 mb-1">
          I&apos;m interested in *
        </label>
        <select id={id('role')} name="role" required className="field" defaultValue="">
          <option value="" disabled>
            Choose a role
          </option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={id('message')} className="block text-sm font-medium text-ink/80 mb-1">
          A little about you
        </label>
        <textarea
          id={id('message')}
          name="message"
          rows={4}
          placeholder="Days you might be free, experience with animals, or anything we should know."
          className="field"
        />
      </div>
      <button type="submit" className="w-full btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  );
}
