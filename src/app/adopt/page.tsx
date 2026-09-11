'use client';

import { useState, useMemo } from 'react';
import AnimalCard from '@/components/AnimalCard';
import { animals, Animal } from '@/data/animals';

export default function AdoptPage() {
  const [speciesFilter, setSpeciesFilter] = useState<string>('all');

  const filteredAnimals = useMemo(() => {
    if (speciesFilter === 'all') return animals;
    return animals.filter((animal) => animal.species === speciesFilter);
  }, [speciesFilter]);

  const dogs = animals.filter(a => a.species === 'dog');
  const cats = animals.filter(a => a.species === 'cat');
  const smallAnimals = animals.filter(a => a.species === 'rabbit' || a.species === 'guinea-pig');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-yellow-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Adopt a Pet</h1>
          <p className="text-lg text-gray-800">
            Every rescue has a story, and every adoption creates a happy ending. Meet our dogs, cats, 
            rabbits and guinea pigs waiting for a loving forever home.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { value: 'all', label: 'All Animals' },
            { value: 'dog', label: `Dogs (${dogs.length})` },
            { value: 'cat', label: `Cats (${cats.length})` },
            { value: 'small', label: `Small Animals (${smallAnimals.length})` },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSpeciesFilter(tab.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                speciesFilter === tab.value
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(speciesFilter === 'small' 
            ? smallAnimals 
            : speciesFilter === 'all' 
            ? animals 
            : filteredAnimals
          ).map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        {/* Rehoming Info */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Our Rehoming Process</h2>
          <div className="prose text-gray-600">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Find an animal you think would match your lifestyle</li>
              <li>Fill out an application form – available on every pet&apos;s page</li>
              <li>We will give you a call as soon as possible to discuss your application</li>
              <li>If we don&apos;t think you are a perfect match for that animal we will do our best to suggest an alternative</li>
              <li>We&apos;ll ask you to come up if you are successful and meet the animals that match</li>
              <li>For some animals – especially dogs, we may ask you to visit more than once</li>
              <li>If you already have dogs, we&apos;ll arrange for you to bring them to meet their new family member at a later date</li>
            </ol>
            <p className="mt-4">
              Our process is designed to make sure our staff have as much information from you before 
              you visit. This means that we can get you straight to the animals, without spending too 
              much time on paperwork.
            </p>
            <p>
              <strong>We are unable to facilitate same day rehoming.</strong>
            </p>
          </div>
        </div>

        {/* Rehoming Fees */}
        <div className="mt-6 bg-yellow-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Rehoming Fees</h3>
          <p className="text-gray-600 text-sm mb-4">
            To help towards the costs of caring for your new companion whilst they have been at our 
            Sanctuary we will ask you to pay a rehoming fee. This fee contributes towards the cost 
            of your new companion&apos;s food bills, medical needs, neutering*, vaccinations, worming and 
            flea treatment, their health checks, microchipping and all the other care they have 
            received from us.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-lg p-3">
              <div className="font-semibold text-gray-900">Dogs</div>
              <div className="text-gray-600">£170</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="font-semibold text-gray-900">Puppies</div>
              <div className="text-gray-600">£200</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="font-semibold text-gray-900">Cats/Kittens</div>
              <div className="text-gray-600">£100</div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="font-semibold text-gray-900">Rabbits</div>
              <div className="text-gray-600">£45</div>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-4">
            *Where an animal leaves Assisi before being neutered, Assisi will provide a contribution 
            towards the neutering costs. The amount of this contribution will vary by species and sex.
          </p>
        </div>
      </div>
    </div>
  );
}
