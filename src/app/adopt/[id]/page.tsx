import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AdoptionForm from '@/components/AdoptionForm';
import { animals, isLongStay, type Compatibility } from '@/data/animals';

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return animals.map((animal) => ({ id: animal.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const animal = animals.find((entry) => entry.id === id);
  if (!animal) {
    return { title: 'Animal not found' };
  }

  const description = animal.description.replace(/\s+/g, ' ').slice(0, 160);

  return {
    title: `${animal.name} | Adopt | Assisi Animal Sanctuary`,
    description,
    openGraph: {
      title: `Adopt ${animal.name}`,
      description,
      images: [{ url: animal.image, alt: animal.name }],
    },
  };
}

function compatibilityText(value: Compatibility, label: string) {
  if (value === true) return label;
  if (value === 'older-only') return `${label} (older only)`;
  if (value === false) return `${label} — no`;
  return `${label} — ask us`;
}

function compatibilityClass(value: Compatibility) {
  if (value === true) return 'bg-teal text-cream';
  if (value === 'older-only') return 'border border-line text-ink';
  return 'border border-line text-ink/50';
}

export default async function AnimalProfilePage({ params }: PageProps) {
  const { id } = await params;
  const animal = animals.find((entry) => entry.id === id);

  if (!animal) {
    notFound();
  }

  const gender = animal.gender === 'male' ? 'Male' : 'Female';
  const size = animal.size === 'unknown' ? 'Not listed' : animal.size;

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-cream border-b border-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-ink/60">
            <Link href="/" className="hover:text-ink">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/adopt" className="hover:text-ink">Adopt</Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{animal.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="panel overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative aspect-square bg-ink/5">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:w-1/2 p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {animal.reserved && (
                  <span className="inline-block bg-ink text-cream text-sm font-medium px-3 py-1 rounded-[12px]">
                    Currently reserved
                  </span>
                )}
                {isLongStay(animal) && (
                  <span className="inline-block border border-teal text-teal text-sm font-medium px-3 py-1 rounded-[12px]">
                    Long stay · waiting {animal.daysAtSanctuary} days
                  </span>
                )}
              </div>

              <h1 className="text-3xl font-bold text-ink mb-2">{animal.name}</h1>
              <p className="text-lg text-ink/70 mb-4">{animal.breed}</p>

              {animal.personality.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {animal.personality.map((trait) => (
                    <span
                      key={trait}
                      className="border border-line text-teal text-xs font-medium px-2 py-1 rounded-[12px]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              )}

              <dl className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <dt className="text-ink/60">Age</dt>
                  <dd className="font-medium text-ink">{animal.age}</dd>
                </div>
                <div>
                  <dt className="text-ink/60">Gender</dt>
                  <dd className="font-medium text-ink">{gender}</dd>
                </div>
                <div>
                  <dt className="text-ink/60">Size</dt>
                  <dd className="font-medium text-ink capitalize">{size}</dd>
                </div>
                <div>
                  <dt className="text-ink/60">Rehoming fee</dt>
                  <dd className="font-medium text-ink">£{animal.rehomingFee}</dd>
                </div>
              </dl>

              <div className="mb-6">
                <h2 className="font-semibold text-ink mb-2">Good with</h2>
                {animal.goodWith.children === 'unknown' &&
                animal.goodWith.dogs === 'unknown' &&
                animal.goodWith.cats === 'unknown' ? (
                  <p className="text-sm text-ink/60">
                    This isn&apos;t listed on the profile. Ask the rehoming team when you apply.
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-2 text-sm">
                    {animal.goodWith.children !== 'unknown' && (
                      <span className={`px-3 py-1 rounded-full ${compatibilityClass(animal.goodWith.children)}`}>
                        {compatibilityText(animal.goodWith.children, 'Children')}
                      </span>
                    )}
                    {animal.goodWith.dogs !== 'unknown' && (
                      <span className={`px-3 py-1 rounded-full ${compatibilityClass(animal.goodWith.dogs)}`}>
                        {compatibilityText(animal.goodWith.dogs, 'Other dogs')}
                      </span>
                    )}
                    {animal.goodWith.cats !== 'unknown' && (
                      <span className={`px-3 py-1 rounded-full ${compatibilityClass(animal.goodWith.cats)}`}>
                        {compatibilityText(animal.goodWith.cats, 'Cats')}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h2 className="font-semibold text-ink mb-2">About {animal.name}</h2>
                <p className="text-ink/70 whitespace-pre-line">{animal.description}</p>
              </div>

              {animal.specialNeeds && animal.specialNeedsDetails && (
                <div className="mb-6 panel p-4">
                  <h3 className="font-semibold text-ink mb-1">Special requirements</h3>
                  <p className="text-ink/70 text-sm">{animal.specialNeedsDetails}</p>
                </div>
              )}

              {!animal.reserved && <AdoptionForm animalName={animal.name} />}

              {animal.reserved && (
                <p className="text-ink/60 text-sm">
                  {animal.name} is currently reserved. Please check back later or view our other animals.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/adopt" className="btn-secondary">
            ← Back to all animals
          </Link>
        </div>
      </div>
    </div>
  );
}
