import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership',
  description:
    'Become an Assisi member from £15 a year. Paw Prints magazine, AGM vote, shop discount, and year-round support for animals in our care.',
};

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
