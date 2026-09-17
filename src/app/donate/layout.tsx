import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Donate to Assisi Animal Sanctuary. Every gift feeds, treats and shelters animals in Northern Ireland. One-off, monthly, Gift Aid, sponsorship and legacy giving.',
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return children;
}
