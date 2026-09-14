import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adopt a pet',
  description:
    'Dogs, cats, rabbits and guinea pigs looking for a home at Assisi Animal Sanctuary in Northern Ireland. Filter by species, age, size and who they live well with.',
};

export default function AdoptLayout({ children }: { children: React.ReactNode }) {
  return children;
}
