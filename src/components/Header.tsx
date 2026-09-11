'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/adopt', label: 'Adopt' },
    { href: '/donate', label: 'Donate' },
    { href: '/volunteer', label: 'Volunteer' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Assisi Animal Sanctuary - Help for the Helpless"
              width={56}
              height={56}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/adopt"
              className="btn-outline text-sm py-2 px-4"
            >
              Find a Pet
            </Link>
            <Link
              href="/donate"
              className="btn-secondary text-sm py-2 px-4"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-yellow-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <Link href="/adopt" className="btn-outline text-center">
                  Find a Pet
                </Link>
                <Link href="/donate" className="btn-secondary text-center">
                  Donate Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Urgent Appeal Banner */}
      <div className="bg-yellow-400 text-gray-900 py-2 px-4 text-center text-sm">
        <span className="font-semibold">🚨 Urgent Appeal:</span> Help us build a dedicated Cat Intake Unit!{' '}
        <Link href="/donate" className="underline hover:no-underline font-semibold">
          Donate today →
        </Link>
      </div>
    </header>
  );
}
