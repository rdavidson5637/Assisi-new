import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Donate',
  'Donate to Assisi Animal Sanctuary. Every gift helps pay for food, veterinary treatment and shelter for animals in Northern Ireland.',
  '/donate'
);

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
