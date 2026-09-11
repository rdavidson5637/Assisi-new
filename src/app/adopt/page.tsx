'use client';

import { useMemo, useState } from 'react';
import AnimalCard from '@/components/AnimalCard';
import { animals } from '@/data/animals';

const LONG_STAY_THRESHOLD = 90;

type Filters = {
  species: string;
  age: string;
  size: string;
  gender: string;
  goodWithChildren: boolean;
  goodWithDogs: boolean;
  goodWithCats: boolean;
};

const defaultFilters: Filters = {
  species: 'all',
  age: 'all',
  size: 'all',
  gender: 'all',
  goodWithChildren: false,
  goodWithDogs: false,
  goodWithCats: false,
};

export default function AdoptPage() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const dogs = animals.filter((a) => a.species === 'dog');
  const cats = animals.filter((a) => a.species === 'cat');
  const smallAnimals = animals.filter((a) => a.species === 'rabbit' || a.species === 'guinea-pig');
  const longStayCount = animals.filter((a) => !a.reserved && a.daysAtSanctuary >= LONG_STAY_THRESHOLD).length;

  const filteredAnimals = useMemo(() => {
    return animals.filter((animal) => {
      if (filters.species === 'small') {
        if (animal.species !== 'rabbit' && animal.species !== 'guinea-pig') return false;
      } else if (filters.species !== 'all' && animal.species !== filters.species) {
        return false;
      }
      if (filters.age !== 'all' && animal.ageCategory !== filters.age) return false;
      if (filters.size !== 'all' && animal.size !== filters.size) return false;
      if (filters.gender !== 'all' && animal.gender !== filters.gender) return false;
      if (filters.goodWithChildren && animal.goodWith.children !== true) return false;
      if (filters.goodWithDogs && !animal.goodWith.dogs) return false;
      if (filters.goodWithCats && !animal.goodWith.cats) return false;
      return true;
    });
  }, [filters]);

  const activeCompatibilityCount = [
    filters.goodWithChildren,
    filters.goodWithDogs,
    filters.goodWithCats,
  ].filter(Boolean).length;
  const hasActiveFilters =
    filters.species !== 'all' ||
    filters.age !== 'all' ||
    filters.size !== 'all' ||
    filters.gender !== 'all' ||
    activeCompatibilityCount > 0;

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

      {longStayCount > 0 && (
        <div className="bg-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm font-medium">
            💗 {longStayCount} {longStayCount === 1 ? 'animal has' : 'animals have'} been waiting 90+
            days for a home — could you give one of them a second look?
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Species Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { value: 'all', label: 'All Animals' },
            { value: 'dog', label: `Dogs (${dogs.length})` },
            { value: 'cat', label: `Cats (${cats.length})` },
            { value: 'small', label: `Small Animals (${smallAnimals.length})` },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilters((f) => ({ ...f, species: tab.value }))}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filters.species === tab.value
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Refine Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <select
                value={filters.age}
                onChange={(e) => setFilters((f) => ({ ...f, age: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="all">Any age</option>
                <option value="baby">Baby</option>
                <option value="young">Young</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
              <select
                value={filters.size}
                onChange={(e) => setFilters((f) => ({ ...f, size: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="all">Any size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
              <select
                value={filters.gender}
                onChange={(e) => setFilters((f) => ({ ...f, gender: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              >
                <option value="all">Any gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700 mb-2">Good with</span>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={filters.goodWithChildren}
                  onChange={(e) => setFilters((f) => ({ ...f, goodWithChildren: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                Children
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={filters.goodWithDogs}
                  onChange={(e) => setFilters((f) => ({ ...f, goodWithDogs: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                Other dogs
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={filters.goodWithCats}
                  onChange={(e) => setFilters((f) => ({ ...f, goodWithCats: e.target.checked }))}
                  className="rounded border-gray-300"
                />
                Cats
              </label>
            </div>
          </div>

          {hasActiveFilters && (
            <button
              onClick={() => setFilters(defaultFilters)}
              className="mt-4 text-sm font-semibold text-gray-900 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 mb-4">
          Showing {filteredAnimals.length} of {animals.length} animals
        </p>

        {/* Animals Grid */}
        {filteredAnimals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center text-gray-500">
            No animals match those filters right now. Try widening your search, or{' '}
            <button onClick={() => setFilters(defaultFilters)} className="underline font-medium text-gray-900">
              clear all filters
            </button>
            .
          </div>
        )}

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
