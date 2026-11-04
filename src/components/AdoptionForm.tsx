'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { mailtoHref, site } from '@/data/site';
import { EmailLink, PhoneLink } from '@/components/ContactLinks';

interface AdoptionFormProps {
  animalName: string;
}

const fieldClass = 'field';

export default function AdoptionForm({ animalName }: AdoptionFormProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const formId = useId();

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const getFocusable = () =>
      dialog
        ? [
            ...dialog.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
            ),
          ]
        : [];

    getFocusable()[0]?.focus();
    document.body.style.overflow = 'hidden';

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previouslyFocused.current?.focus();
    };
  }, [open]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = String(data.get('firstName') ?? '');
    const lastName = String(data.get('lastName') ?? '');
    const email = String(data.get('email') ?? '');
    const phone = String(data.get('phone') ?? '');
    const address = String(data.get('address') ?? '');
    const about = String(data.get('about') ?? '');

    setDraft({
      subject: `Rehoming application for ${animalName}`,
      body: [
        `Rehoming application for ${animalName}`,
        '',
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Address: ${address}`,
        '',
        about,
      ].join('\n'),
    });
    setOpen(false);
  };

  const id = (name: string) => `${formId}-${name}`;

  return (
    <>
      {draft && (
        <div className="mb-6 panel p-4">
          <p className="text-ink">
            <strong>This form is not sent automatically.</strong> Email it to us, or call, and a
            member of the rehoming team will be in touch.
          </p>
          <p className="text-ink/80 text-sm mt-2">
            <PhoneLink className="underline" />
            {' · '}
            <EmailLink className="underline" />
          </p>
          <a
            href={mailtoHref(draft.subject, draft.body)}
            className="btn-primary mt-4"
          >
            Email this application
          </a>
        </div>
      )}

      {!draft && (
        <button type="button" onClick={() => setOpen(true)} className="w-full btn-primary">
          Apply to Adopt {animalName}
        </button>
      )}

      {open && (
        <div className="fixed inset-0 bg-ink/50 flex items-center justify-center p-4 z-50">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={id('title')}
            className="panel max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-line flex justify-between items-center gap-4">
              <h2 id={id('title')} className="text-xl font-bold text-ink">
                Rehoming application for {animalName}
              </h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close application form"
                className="text-ink/50 hover:text-ink"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <p className="text-sm text-ink/70">
                We can&apos;t take applications through this page yet. When you continue, your email
                app will open with this form ready to send to {site.email}.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor={id('firstName')} className="block text-sm font-medium text-ink/80 mb-1">
                    First name *
                  </label>
                  <input id={id('firstName')} name="firstName" type="text" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor={id('lastName')} className="block text-sm font-medium text-ink/80 mb-1">
                    Last name *
                  </label>
                  <input id={id('lastName')} name="lastName" type="text" required className={fieldClass} />
                </div>
              </div>

              <div>
                <label htmlFor={id('email')} className="block text-sm font-medium text-ink/80 mb-1">
                  Email *
                </label>
                <input id={id('email')} name="email" type="email" required autoComplete="email" className={fieldClass} />
              </div>

              <div>
                <label htmlFor={id('phone')} className="block text-sm font-medium text-ink/80 mb-1">
                  Phone *
                </label>
                <input id={id('phone')} name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
              </div>

              <div>
                <label htmlFor={id('address')} className="block text-sm font-medium text-ink/80 mb-1">
                  Address *
                </label>
                <textarea id={id('address')} name="address" rows={2} required className={fieldClass} />
              </div>

              <div>
                <label htmlFor={id('about')} className="block text-sm font-medium text-ink/80 mb-1">
                  Tell us about yourself and why you&apos;d like to adopt {animalName} *
                </label>
                <textarea id={id('about')} name="about" rows={4} required className={fieldClass} />
              </div>

              <div className="flex items-start gap-2">
                <input id={id('confirm')} name="confirm" type="checkbox" required className="mt-1 accent-teal" />
                <label htmlFor={id('confirm')} className="text-sm text-ink/70">
                  I confirm that I am over 18 and the information provided is accurate.
                </label>
              </div>

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={close} className="flex-1 btn-secondary text-center">
                  Cancel
                </button>
                <button type="submit" className="flex-1 btn-primary">
                  Prepare email
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
