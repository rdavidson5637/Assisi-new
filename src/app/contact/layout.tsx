import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Visit Assisi Animal Sanctuary in Conlig, Newtownards, or get in touch by phone and email. Opening hours and a message form.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
