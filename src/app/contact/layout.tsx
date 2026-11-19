import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Contact',
  'Visit Assisi Animal Sanctuary in Conlig, Newtownards, or get in touch by phone and email. Sanctuary address, opening hours and contact details.',
  '/contact'
);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
