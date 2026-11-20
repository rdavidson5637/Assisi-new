import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Sponsorship',
  'Sponsor Assisi Animal Sanctuary from £6 a month. Your gift helps provide shelter, food and medical care for animals until they find a home.',
  '/sponsor'
);

export default function SponsorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
