import Link from 'next/link';
import { Animal } from '@/data/animals';

interface AnimalCardProps {
  animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <Link href={`/adopt/${animal.id}`}>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative aspect-square">
          <img
            src={animal.image}
            alt={animal.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {animal.reserved && (
            <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded">
              Reserved
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900">{animal.name}</h3>
          <p className="text-gray-600 text-sm">{animal.breed}</p>
          <p className="text-gray-500 text-sm">{animal.age} · {animal.gender === 'male' ? 'Male' : 'Female'}</p>
        </div>
      </div>
    </Link>
  );
}
