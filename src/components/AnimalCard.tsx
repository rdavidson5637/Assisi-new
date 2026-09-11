import Link from 'next/link';
import Image from 'next/image';
import { Animal } from '@/data/animals';

interface AnimalCardProps {
  animal: Animal;
}

const LONG_STAY_THRESHOLD = 90;

export default function AnimalCard({ animal }: AnimalCardProps) {
  const isLongStay = animal.daysAtSanctuary >= LONG_STAY_THRESHOLD;

  return (
    <Link href={`/adopt/${animal.id}`} className="group block">
      <div className="card-hover bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="relative aspect-square bg-gray-100">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
            {animal.reserved && (
              <span className="bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded">
                Reserved
              </span>
            )}
            {!animal.reserved && isLongStay && (
              <span className="bg-pink-600 text-white text-xs font-semibold px-2 py-1 rounded">
                Long Stay
              </span>
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900">{animal.name}</h3>
          <p className="text-gray-600 text-sm">{animal.breed}</p>
          <p className="text-gray-500 text-sm mb-3">
            {animal.age} · {animal.gender === 'male' ? 'Male' : 'Female'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {animal.personality.slice(0, 3).map((trait) => (
              <span
                key={trait}
                className="bg-yellow-50 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
