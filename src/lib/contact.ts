/** What the visitor typed into the contact form. */
export type ContactValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const emptyContact: ContactValues = { name: '', email: '', phone: '', message: '' };

/** Reads the contact form, trimming each answer. Missing fields read as empty. */
export function readContactForm(data: { get(name: string): unknown }): ContactValues {
  const read = (key: keyof ContactValues) => {
    const value = data.get(key);
    return typeof value === 'string' ? value.trim() : '';
  };
  return { name: read('name'), email: read('email'), phone: read('phone'), message: read('message') };
}

/** The email the contact page opens: subject names the sender, phone only when given. */
export function buildContactDraft(values: ContactValues): { subject: string; body: string } {
  return {
    subject: values.name ? `Message from ${values.name}` : 'Message from the website',
    body: [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      ...(values.phone ? [`Phone: ${values.phone}`] : []),
      '',
      values.message,
    ].join('\n'),
  };
}
