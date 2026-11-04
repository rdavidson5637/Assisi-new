import Link from 'next/link';
import Image from 'next/image';
import { isLongStay, type Animal } from '@/data/animals';

interface AnimalCardProps {
  animal: Animal;
  large?: boolean;
}

export default function AnimalCard({ animal, large = false }: AnimalCardProps) {
  const longStay = isLongStay(animal);
  const traits = animal.personality.slice(0, 3).join(', ');

  return (
    <Link href={`/adopt/${animal.id}`} className="group block h-full">
      <div className="card-hover panel overflow-hidden h-full">
        <div className={`relative bg-ink/5 ${large ? 'aspect-[4/3]' : 'aspect-square'}`}>
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            sizes={
              large
                ? '(min-width: 768px) 50vw, 100vw'
                : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
            }
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className={large ? 'p-6' : 'p-4'}>
          {animal.reserved && (
            <p className="text-xs font-semibold text-ink mb-2">Reserved</p>
          )}
          {longStay && (
            <p className="mb-2">
              <span className="inline-block bg-teal text-cream text-xs font-semibold px-2 py-1 rounded-[12px]">
                Long Stay
              </span>
            </p>
          )}
          <h3
            className={`font-bold text-ink ${
              large ? 'text-4xl md:text-5xl leading-none' : 'text-lg'
            }`}
          >
            {animal.name}
          </h3>
          <p className="text-ink/70 text-sm mt-2">{animal.breed}</p>
          <p className="text-ink/60 text-sm">
            {animal.age} · {animal.gender === 'male' ? 'Male' : 'Female'}
          </p>
          {traits && <p className="text-ink/70 text-sm mt-2">{traits}</p>}
        </div>
      </div>
    </Link>
  );
}
