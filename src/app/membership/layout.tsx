import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  'Membership',
  'Become an Assisi member for £15 a year. Includes Paw Prints magazine twice a year, an AGM invitation and vote, and a 10% charity shop discount.',
  '/membership'
);

export default function MembershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
