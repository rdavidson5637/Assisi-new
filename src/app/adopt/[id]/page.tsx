'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { animals } from '@/data/animals';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function AnimalProfilePage({ params }: PageProps) {
  const { id } = use(params);
  const animal = animals.find(a => a.id === id);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!animal) {
    notFound();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <span>/</span>
            <Link href="/adopt" className="hover:text-gray-900">Adopt</Link>
            <span>/</span>
            <span className="text-gray-900">{animal.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {submitted && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800">
              <strong>Thank you!</strong> Your application for {animal.name} has been submitted. 
              We will review it and contact you as soon as possible.
            </p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            {/* Image */}
            <div className="md:w-1/2">
              <div className="aspect-square">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="md:w-1/2 p-6 md:p-8">
              {animal.reserved && (
                <div className="inline-block bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded mb-4">
                  Currently Reserved
                </div>
              )}
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{animal.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{animal.breed}</p>

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
                  <dt className="text-gray-500">Rehoming Fee</dt>
                  <dd className="font-medium text-gray-900">£{animal.rehomingFee}</dd>
                </div>
              </dl>

              <div className="mb-6">
                <h2 className="font-semibold text-gray-900 mb-2">About {animal.name}</h2>
                <p className="text-gray-600">{animal.description}</p>
              </div>

              {animal.specialNeeds && animal.specialNeedsDetails && (
                <div className="mb-6 bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Special Requirements</h3>
                  <p className="text-gray-600 text-sm">{animal.specialNeedsDetails}</p>
                </div>
              )}

              {!animal.reserved && !submitted && (
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full btn-secondary"
                >
                  Apply to Adopt {animal.name}
                </button>
              )}

              {animal.reserved && (
                <p className="text-gray-500 text-sm">
                  {animal.name} is currently reserved. Please check back later or view our other animals.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Application Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">
                  Rehoming Application for {animal.name}
                </h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input type="tel" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                  <textarea rows={2} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about yourself and why you&apos;d like to adopt {animal.name} *
                  </label>
                  <textarea rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
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
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="mt-6">
          <Link href="/adopt" className="text-gray-600 hover:text-gray-900">
            ← Back to all animals
          </Link>
        </div>
      </div>
    </div>
  );
}
