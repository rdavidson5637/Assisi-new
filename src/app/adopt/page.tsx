import { Suspense } from 'react';
import type { Metadata } from 'next';
import AdoptBrowser from '@/components/AdoptBrowser';

export const metadata: Metadata = {
  title: 'Adopt a Pet | Assisi Animal Sanctuary',
  description:
    'Meet the dogs, cats, rabbits, guinea pigs and other small animals waiting for a home at Assisi Animal Sanctuary in Conlig, Northern Ireland.',
};

export default function AdoptPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <AdoptBrowser />
    </Suspense>
  );
}
