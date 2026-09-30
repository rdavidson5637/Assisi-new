'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import AnimalCard from '@/components/AnimalCard';
import { animals, isLongStay, type Animal } from '@/data/animals';

const SMALL_SPECIES = new Set<Animal['species']>(['rabbit', 'guinea-pig', 'other']);

type Sort = 'available' | 'waiting' | 'name';

function readParam(params: URLSearchParams, key: string, fallback: string) {
  return params.get(key) ?? fallback;
}

function compareAnimals(a: Animal, b: Animal, sort: Sort) {
  if (sort !== 'name' && a.reserved !== b.reserved) return a.reserved ? 1 : -1;
  if (sort === 'waiting') {
    const aDays = a.daysAtSanctuary;
    const bDays = b.daysAtSanctuary;
    if (aDays != null && bDays != null && aDays !== bDays) return bDays - aDays;
    if (aDays != null && bDays == null) return -1;
    if (aDays == null && bDays != null) return 1;
  }
  return a.name.localeCompare(b.name, 'en-GB');
}

const selectClass = 'field';

export default function AdoptBrowser() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const species = readParam(params, 'species', 'all');
  const age = readParam(params, 'age', 'all');
  const size = readParam(params, 'size', 'all');
  const gender = readParam(params, 'gender', 'all');
  const goodWithChildren = params.get('children') === '1';
  const goodWithDogs = params.get('dogs') === '1';
  const goodWithCats = params.get('cats') === '1';
  const sortParam = params.get('sort');
  const sort: Sort = sortParam === 'name' || sortParam === 'waiting' ? sortParam : 'available';
  const hasWaitTimes = animals.some((animal) => animal.daysAtSanctuary != null);

  const update = (next: Record<string, string | null>) => {
    const query = new URLSearchParams(params.toString());
    for (const [key, value] of Object.entries(next)) {
      if (value == null || value === '' || value === 'all' || value === '0') {
        query.delete(key);
      } else {
        query.set(key, value);
      }
    }
    const search = query.toString();
    router.replace(search ? `${pathname}?${search}` : pathname, { scroll: false });
  };

  const dogs = animals.filter((animal) => animal.species === 'dog');
  const cats = animals.filter((animal) => animal.species === 'cat');
  const smallAnimals = animals.filter((animal) => SMALL_SPECIES.has(animal.species));
  const longStayCount = animals.filter((animal) => isLongStay(animal)).length;

  const filteredAnimals = useMemo(() => {
    return animals
      .filter((animal) => {
        if (species === 'small') {
          if (!SMALL_SPECIES.has(animal.species)) return false;
        } else if (species !== 'all' && animal.species !== species) {
          return false;
        }
        if (age !== 'all' && animal.ageCategory !== age) return false;
        if (size !== 'all' && animal.size !== size) return false;
        if (gender !== 'all' && animal.gender !== gender) return false;
        if (goodWithChildren && animal.goodWith.children !== true) return false;
        if (goodWithDogs && animal.goodWith.dogs !== true) return false;
        if (goodWithCats && animal.goodWith.cats !== true) return false;
        return true;
      })
      .sort((a, b) => compareAnimals(a, b, sort));
  }, [species, age, size, gender, goodWithChildren, goodWithDogs, goodWithCats, sort]);

  const hasActiveFilters =
    species !== 'all' ||
    age !== 'all' ||
    size !== 'all' ||
    gender !== 'all' ||
    goodWithChildren ||
    goodWithDogs ||
    goodWithCats ||
    sort !== 'available';

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink mb-3">Adopt a Pet</h1>
          <p className="text-lg text-ink/80">
            Dogs, cats, rabbits and guinea pigs waiting for a home.
          </p>
        </div>
      </section>

      {longStayCount > 0 && (
        <div className="bg-ink text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm font-medium">
            {longStayCount} {longStayCount === 1 ? 'animal has' : 'animals have'} been waiting 90+
            days for a home — could you give one of them a second look?
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { value: 'all', label: 'All Animals' },
            { value: 'dog', label: `Dogs (${dogs.length})` },
            { value: 'cat', label: `Cats (${cats.length})` },
            { value: 'small', label: `Small Animals (${smallAnimals.length})` },
          ].map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => update({ species: tab.value === 'all' ? null : tab.value })}
              className={`px-4 py-2 rounded-[12px] font-medium transition-colors border ${
                species === tab.value
                  ? 'bg-ink text-cream border-ink'
                  : 'bg-cream text-ink/80 border-line hover:border-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="panel p-4 sm:p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label htmlFor="filter-age" className="block text-sm font-medium text-ink/80 mb-1">
                Age
              </label>
              <select
                id="filter-age"
                value={age}
                onChange={(event) => update({ age: event.target.value })}
                className={selectClass}
              >
                <option value="all">Any age</option>
                <option value="baby">Baby</option>
                <option value="young">Young</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <div>
              <label htmlFor="filter-size" className="block text-sm font-medium text-ink/80 mb-1">
                Size
              </label>
              <select
                id="filter-size"
                value={size}
                onChange={(event) => update({ size: event.target.value })}
                className={selectClass}
              >
                <option value="all">Any size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div>
              <label htmlFor="filter-gender" className="block text-sm font-medium text-ink/80 mb-1">
                Gender
              </label>
              <select
                id="filter-gender"
                value={gender}
                onChange={(event) => update({ gender: event.target.value })}
                className={selectClass}
              >
                <option value="all">Any gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="filter-sort" className="block text-sm font-medium text-ink/80 mb-1">
                Sort
              </label>
              <select
                id="filter-sort"
                value={sort}
                onChange={(event) => update({ sort: event.target.value === 'available' ? null : event.target.value })}
                className={selectClass}
              >
                <option value="available">Available first</option>
                <option value="waiting">Longest waiting</option>
                <option value="name">Name</option>
              </select>
              {!hasWaitTimes && (
                <p className="text-xs text-ink/60 mt-1">
                  Wait times appear here once the sanctuary publishes them.
                </p>
              )}
            </div>
          </div>

          <div>
            <span className="block text-sm font-medium text-ink/80 mb-2">Good with</span>
            <div className="flex flex-wrap gap-4">
              <label htmlFor="filter-children" className="flex items-center gap-2 text-sm text-ink/80">
                <input
                  id="filter-children"
                  type="checkbox"
                  checked={goodWithChildren}
                  onChange={(event) => update({ children: event.target.checked ? '1' : null })}
                  className="rounded border-line accent-teal"
                />
                Children
              </label>
              <label htmlFor="filter-dogs" className="flex items-center gap-2 text-sm text-ink/80">
                <input
                  id="filter-dogs"
                  type="checkbox"
                  checked={goodWithDogs}
                  onChange={(event) => update({ dogs: event.target.checked ? '1' : null })}
                  className="rounded border-line accent-teal"
                />
                Other dogs
              </label>
              <label htmlFor="filter-cats" className="flex items-center gap-2 text-sm text-ink/80">
                <input
                  id="filter-cats"
                  type="checkbox"
                  checked={goodWithCats}
                  onChange={(event) => update({ cats: event.target.checked ? '1' : null })}
                  className="rounded border-line accent-teal"
                />
                Cats
              </label>
            </div>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={() => router.replace(pathname, { scroll: false })}
              className="btn-secondary mt-4 text-sm"
            >
              Clear all filters
            </button>
          )}
        </div>

        <p className="text-sm text-ink/60 mb-4">
          Showing {filteredAnimals.length} of {animals.length} animals
        </p>

        {filteredAnimals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        ) : (
          <div className="panel p-12 text-center text-ink/60">
            No animals match those filters right now. Try widening your search, or{' '}
            <button
              type="button"
              onClick={() => router.replace(pathname, { scroll: false })}
              className="btn-secondary"
            >
              clear all filters
            </button>
            .
          </div>
        )}

        <div className="mt-12 panel p-6">
          <h2 className="text-xl font-bold text-ink mb-4">Our Rehoming Process</h2>
          <ol className="list-decimal pl-5 space-y-2 text-ink/70">
            <li>Find an animal you think would match your lifestyle</li>
            <li>Fill out an application form – available on every pet&apos;s page</li>
            <li>We will give you a call as soon as possible to discuss your application</li>
            <li>If we don&apos;t think you are a perfect match for that animal we will do our best to suggest an alternative</li>
            <li>We&apos;ll ask you to come up if you are successful and meet the animals that match</li>
            <li>For some animals – especially dogs, we may ask you to visit more than once</li>
            <li>If you already have dogs, we&apos;ll arrange for you to bring them to meet their new family member at a later date</li>
          </ol>
          <p className="mt-4 text-ink/70">
            Our process is designed to make sure our staff have as much information from you before
            you visit. This means that we can get you straight to the animals, without spending too
            much time on paperwork.
          </p>
          <p className="text-ink/70">
            <strong>We are unable to facilitate same day rehoming.</strong>
          </p>
        </div>

        <div className="mt-6 panel p-6">
          <h3 className="text-lg font-bold text-ink mb-3">Rehoming Fees</h3>
          <p className="text-ink/70 text-sm mb-4">
            To help towards the costs of caring for your new companion whilst they have been at our
            Sanctuary we will ask you to pay a rehoming fee. This fee contributes towards the cost
            of your new companion&apos;s food bills, medical needs, neutering*, vaccinations, worming and
            flea treatment, their health checks, microchipping and all the other care they have
            received from us.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              ['Dogs', '£170'],
              ['Puppies', '£200'],
              ['Cats/Kittens', '£100'],
              ['Rabbits', '£45'],
              ['Guinea pigs', '£20'],
              ['Rats', '£15'],
            ].map(([label, amount]) => (
              <div key={label} className="panel p-3">
                <div className="font-semibold text-ink">{label}</div>
                <div className="text-ink/70">{amount}</div>
              </div>
            ))}
          </div>
          <p className="text-ink/60 text-xs mt-4">
            *Where an animal leaves Assisi before being neutered, Assisi will provide a contribution
            towards the neutering costs. The amount of this contribution will vary by species and sex.
          </p>
        </div>
      </div>
    </div>
  );
}
