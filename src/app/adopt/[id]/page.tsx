import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { animals } from '@/data/animals';
import AnimalProfile from '@/components/AnimalProfile';

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return animals.map((animal) => ({ id: animal.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const animal = animals.find((a) => a.id === id);
  if (!animal) {
    return { title: 'Animal not found' };
  }
  return {
    title: `Adopt ${animal.name}`,
    description: `${animal.name} is a ${animal.age} ${animal.breed} looking for a home at Assisi Animal Sanctuary. ${animal.description}`,
  };
}

export default async function AnimalProfilePage({ params }: PageProps) {
  const { id } = await params;
  const animal = animals.find((a) => a.id === id);
  if (!animal) notFound();
  return <AnimalProfile animal={animal} />;
}
