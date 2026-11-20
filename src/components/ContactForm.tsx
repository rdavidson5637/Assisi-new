"use client";

import { useEffect, useId, useRef, useState } from "react";
import { EmailLink, PhoneLink } from "@/components/ContactLinks";
import { mailtoHref, site } from "@/data/site";
import { buildContactDraft, emptyContact, readContactForm, type ContactValues } from "@/lib/contact";

// min-h-11 kept for a11y SSR tests; as-rm-field adds 16px type to avoid iOS zoom.
const fieldClass = "field min-h-11 as-rm-field";
const contactLinkClass = "link inline-flex min-h-11 items-center";

export default function ContactForm() {
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

  if (draft) {
    return (
      <div className="panel p-6 sm:p-8" aria-live="polite">
        <h2 ref={readyRef} tabIndex={-1} className="text-lg font-bold text-ink mb-2">
          Ready to send
        </h2>
        <p className="text-ink/80">
          This form is not delivered automatically. Open your email app to send the message, or call
          us and we&apos;ll take it from there.
        </p>
        <p className="text-ink/80 text-sm mt-2">
          <PhoneLink className={contactLinkClass} />
          {" · "}
          <EmailLink className={contactLinkClass} />
        </p>
        <a href={mailtoHref(draft.subject, draft.body)} className="as-rm-tap-block btn-primary mt-4">
          Email this message
        </a>
        <div className="mt-4">
          <button
            type="button"
            onClick={() => {
              setEdited(true);
              setDraft(null);
            }}
            className="btn-secondary as-rm-tap"
          >
            Edit message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-ink/70">
        We can&apos;t take messages through this page yet. Continuing opens your email app with the
        message ready to send to {site.email}.
      </p>
      <p className="text-sm text-ink/70">Questions marked * must be filled in.</p>
      <div>
        <label htmlFor={id("name")} className="block text-sm font-medium text-ink/80 mb-1">
          Name *
        </label>
        <input
          ref={nameRef}
          id={id("name")}
          name="name"
          type="text"
          required
          autoComplete="name"
          defaultValue={values.name}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={id("email")} className="block text-sm font-medium text-ink/80 mb-1">
          Email *
        </label>
        <input
          id={id("email")}
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={values.email}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={id("phone")} className="block text-sm font-medium text-ink/80 mb-1">
          Phone
        </label>
        <input
          id={id("phone")}
          name="phone"
          type="tel"
          autoComplete="tel"
          defaultValue={values.phone}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={id("message")} className="block text-sm font-medium text-ink/80 mb-1">
          Message *
        </label>
        <textarea
          id={id("message")}
          name="message"
          rows={5}
          required
          defaultValue={values.message}
          className={fieldClass}
        />
      </div>

      <button type="submit" className="w-full as-rm-tap-block btn-primary">
        Prepare email
      </button>
    </form>
  );
}
