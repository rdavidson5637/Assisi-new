import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponsorship',
  description:
    'Sponsor Assisi Animal Sanctuary from £6 a month. Your gift feeds, treats and shelters animals until they find a home.',
};

export default function SponsorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
