'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimalCard from '@/components/AnimalCard';
import { animals, Animal } from '@/data/animals';

const LONG_STAY_THRESHOLD = 90;

export default function AnimalProfile({ animal }: { animal: Animal }) {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const similar = animals
    .filter((a) => a.id !== animal.id && a.species === animal.species && !a.reserved)
    .slice(0, 4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <Link href="/adopt" className="hover:text-gray-900">Adopt</Link>
            <span>/</span>
            <span className="text-gray-900">{animal.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {submitted ? (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-2xl p-4">
            <p className="text-green-800">
              <strong>Thank you!</strong> Your application for {animal.name} has been submitted.
              We will review it and contact you as soon as possible.
            </p>
          </div>
        ) : null}

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative aspect-square bg-gray-100">
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
                {animal.reserved ? (
                  <span className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded">
                    Currently reserved
                  </span>
                ) : null}
                {!animal.reserved && animal.daysAtSanctuary != null && animal.daysAtSanctuary >= LONG_STAY_THRESHOLD ? (
                  <span className="inline-block bg-pink-600 text-white text-sm font-medium px-3 py-1 rounded">
                    Long stay · waiting {animal.daysAtSanctuary} days
                  </span>
                ) : null}
                {animal.specialNeeds ? (
                  <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded">
                    Special care
                  </span>
                ) : null}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2">{animal.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{animal.breed}</p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {animal.personality.map((trait) => (
                  <span
                    key={trait}
                    className="bg-yellow-50 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <dl className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div>
                  <dt className="text-gray-500">Age</dt>
                  <dd className="font-medium text-gray-900">{animal.age}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Gender</dt>
                  <dd className="font-medium text-gray-900">{animal.gender === 'male' ? 'Male' : 'Female'}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Size</dt>
                  <dd className="font-medium text-gray-900 capitalize">{animal.size}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Rehoming fee</dt>
                  <dd className="font-medium text-gray-900">£{animal.rehomingFee}</dd>
                </div>
              </dl>

              <div className="mb-6">
                <h2 className="font-semibold text-gray-900 mb-2">Good with</h2>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      animal.goodWith.children === true
                        ? 'bg-green-50 text-green-800'
                        : animal.goodWith.children === 'older-only'
                          ? 'bg-amber-50 text-amber-800'
                          : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    Children{animal.goodWith.children === 'older-only' ? ' (older only)' : ''}
                    {animal.goodWith.children === false ? ' — no' : ''}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full ${
                      animal.goodWith.dogs ? 'bg-green-50 text-green-800' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    Other dogs{!animal.goodWith.dogs ? ' — no' : ''}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full ${
                      animal.goodWith.cats ? 'bg-green-50 text-green-800' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    Cats{!animal.goodWith.cats ? ' — no' : ''}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="font-semibold text-gray-900 mb-2">About {animal.name}</h2>
                <p className="text-gray-600">{animal.description}</p>
              </div>

              {animal.specialNeeds && animal.specialNeedsDetails ? (
                <div className="mb-6 bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Special requirements</h3>
                  <p className="text-gray-600 text-sm">{animal.specialNeedsDetails}</p>
                </div>
              ) : null}

              {!animal.reserved && !submitted ? (
                <button onClick={() => setShowForm(true)} className="w-full btn-secondary">
                  Apply to adopt {animal.name}
                </button>
              ) : null}

              {animal.reserved ? (
                <p className="text-gray-500 text-sm">
                  {animal.name} is currently reserved.{' '}
                  <Link href="/adopt" className="underline font-medium text-gray-900">
                    See other animals looking for homes
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {similar.length > 0 ? (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Other {animal.species === 'guinea-pig' ? 'small animals' : `${animal.species}s`} looking for a home</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similar.map((a) => (
                <AnimalCard key={a.id} animal={a} />
              ))}
            </div>
          </div>
        ) : null}

        {showForm ? (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-labelledby="application-title"
            >
              <div className="p-6 border-b flex justify-between items-center">
                <h2 id="application-title" className="text-xl font-bold text-gray-900">
                  Rehoming application for {animal.name}
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close application form"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                      First name *
                    </label>
                    <input id="first-name" type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last name *
                    </label>
                    <input id="last-name" type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>
                <div>
                  <label htmlFor="app-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input id="app-email" type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="app-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input id="app-phone" type="tel" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="app-address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <textarea id="app-address" rows={2} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div>
                  <label htmlFor="app-why" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about yourself and why you&apos;d like to adopt {animal.name} *
                  </label>
                  <textarea id="app-why" rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" required id="confirm" className="mt-1" />
                  <label htmlFor="confirm" className="text-sm text-gray-600">
                    I confirm that I am over 18 and the information provided is accurate.
                  </label>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 btn-outline">
                    Cancel
                  </button>
                  <button type="submit" className="flex-1 btn-secondary">
                    Submit application
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}

        <div className="mt-8">
          <Link href="/adopt" className="text-gray-600 hover:text-gray-900">
            ← Back to all animals
          </Link>
        </div>
      </div>
    </div>
  );
}
