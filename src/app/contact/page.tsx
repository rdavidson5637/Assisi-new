'use client';

import { useId, useState } from 'react';
import { AddressLines, EmailLink, PhoneLink } from '@/components/ContactLinks';
import { mailtoHref, site } from '@/data/site';

const fieldClass = 'field';

export default function ContactPage() {
  const [draft, setDraft] = useState<{ subject: string; body: string } | null>(null);
  const formId = useId();
  const id = (name: string) => `${formId}-${name}`;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const phone = String(data.get('phone') ?? '');
    const message = String(data.get('message') ?? '');

    setDraft({
      subject: `Message from ${name}`,
      body: [
        `Name: ${name}`,
        `Email: ${email}`,
        ...(phone ? [`Phone: ${phone}`] : []),
        '',
        message,
      ].join('\n'),
    });
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
                  <PhoneLink className="text-ink/70 hover:text-ink" />
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-ink mb-1">Email</h3>
                <p>
                  <EmailLink className="text-ink/70 hover:text-ink" />
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-ink mb-1">Opening Hours</h3>
                <p className="text-ink/70">
                  {site.openingHours.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div>
            {draft ? (
              <div className="panel p-6">
                <h2 className="text-lg font-bold text-ink mb-2">Ready to send</h2>
                <p className="text-ink/80">
                  This form is not delivered automatically. Open your email app to send the message,
                  or call us and we&apos;ll take it from there.
                </p>
                <p className="text-ink/80 text-sm mt-2">
                  <PhoneLink className="underline" />
                  {' · '}
                  <EmailLink className="underline" />
                </p>
                <a href={mailtoHref(draft.subject, draft.body)} className="btn-primary mt-4">
                  Email this message
                </a>
                <div className="mt-4">
                  <button
                    type="button"
                    onClick={() => setDraft(null)}
                    className="btn-secondary"
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
                <div>
                  <label htmlFor={id('name')} className="block text-sm font-medium text-ink/80 mb-1">
                    Name *
                  </label>
                  <input id={id('name')} name="name" type="text" required autoComplete="name" className={fieldClass} />
                </div>

                <div>
                  <label htmlFor={id('email')} className="block text-sm font-medium text-ink/80 mb-1">
                    Email *
                  </label>
                  <input id={id('email')} name="email" type="email" required autoComplete="email" className={fieldClass} />
                </div>

                <div>
                  <label htmlFor={id('phone')} className="block text-sm font-medium text-ink/80 mb-1">
                    Phone
                  </label>
                  <input id={id('phone')} name="phone" type="tel" autoComplete="tel" className={fieldClass} />
                </div>

                <div>
                  <label htmlFor={id('message')} className="block text-sm font-medium text-ink/80 mb-1">
                    Message *
                  </label>
                  <textarea id={id('message')} name="message" rows={5} required className={fieldClass} />
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
