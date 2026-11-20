'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { AddressLines, EmailLink, PhoneLink } from '@/components/ContactLinks';
import { mailtoHref, site } from '@/data/site';
import { buildContactDraft, emptyContact, readContactForm, type ContactValues } from '@/lib/contact';
import { plainDashes } from '@/lib/text';

// min-h-11: 44px fields are easier to tap on a phone (.field alone is about 42px).
const fieldClass = 'field min-h-11';
// .link is inline, so make standalone phone and email links tall enough to tap.
const contactLinkClass = 'link inline-flex min-h-11 items-center';

export default function ContactPage() {
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);
  // Kept so "Edit message" brings the form back with what the visitor typed, not blank.
  const [values, setValues] = useState<ContactValues>(emptyContact);
  const [edited, setEdited] = useState(false);
  const readyRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const formId = useId();
  const id = (name: string) => `${formId}-${name}`;

  // The form and the panel replace each other, so move focus to whichever just appeared.
  useEffect(() => {
    if (draft) readyRef.current?.focus();
    else if (edited) nameRef.current?.focus();
  }, [draft, edited]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answers = readContactForm(new FormData(event.currentTarget));
    setValues(answers);
    setDraft(buildContactDraft(answers));
  };

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink">Contact Us</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-ink mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-1">Address</h3>
                <AddressLines className="text-ink/70" />
              </div>

              <div>
                <h3 className="font-semibold text-ink mb-1">Phone</h3>
                <p>
                  <PhoneLink className={contactLinkClass} />
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-ink mb-1">Email</h3>
                <p>
                  <EmailLink className={contactLinkClass} />
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-ink mb-1">Opening Hours</h3>
                <p className="text-ink/70">
                  {site.openingHours.map((line) => (
                    <span key={line} className="block">
                      {plainDashes(line)}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div>
            {draft ? (
              <div className="panel p-6" aria-live="polite">
                <h2 ref={readyRef} tabIndex={-1} className="text-lg font-bold text-ink mb-2">
                  Ready to send
                </h2>
                <p className="text-ink/80">
                  This form is not delivered automatically. Open your email app to send the message,
                  or call us and we&apos;ll take it from there.
                </p>
                <p className="text-ink/80 text-sm mt-2">
                  <PhoneLink className={contactLinkClass} />
                  {' · '}
                  <EmailLink className={contactLinkClass} />
                </p>
                <a href={mailtoHref(draft.subject, draft.body)} className="btn-primary mt-4">
                  Email this message
                </a>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setEdited(true);
                      setDraft(null);
                    }}
                    className="btn-secondary inline-flex! min-h-11 items-center"
                  >
                    Edit message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm text-ink/70">
                  We can&apos;t take messages through this page yet. Continuing opens your email app
                  with the message ready to send to {site.email}.
                </p>
                <p className="text-sm text-ink/70">Questions marked * must be filled in.</p>
                <div>
                  <label htmlFor={id('name')} className="block text-sm font-medium text-ink/80 mb-1">
                    Name *
                  </label>
                  <input ref={nameRef} id={id('name')} name="name" type="text" required autoComplete="name" defaultValue={values.name} className={fieldClass} />
                </div>

                <div>
                  <label htmlFor={id('email')} className="block text-sm font-medium text-ink/80 mb-1">
                    Email *
                  </label>
                  <input id={id('email')} name="email" type="email" required autoComplete="email" defaultValue={values.email} className={fieldClass} />
                </div>

                <div>
                  <label htmlFor={id('phone')} className="block text-sm font-medium text-ink/80 mb-1">
                    Phone
                  </label>
                  <input id={id('phone')} name="phone" type="tel" autoComplete="tel" defaultValue={values.phone} className={fieldClass} />
                </div>

                <div>
                  <label htmlFor={id('message')} className="block text-sm font-medium text-ink/80 mb-1">
                    Message *
                  </label>
                  <textarea id={id('message')} name="message" rows={5} required defaultValue={values.message} className={fieldClass} />
                </div>

                <button type="submit" className="w-full btn-primary">
                  Prepare email
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
