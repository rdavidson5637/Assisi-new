'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/adopt', label: 'Adopt' },
  { href: '/donate', label: 'Donate' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/shops', label: 'Shops' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const involvedLinks = [
  { href: '/sponsor', label: 'Sponsorship' },
  { href: '/membership', label: 'Membership' },
  { href: '/legacy', label: 'Leave a legacy' },
  { href: '/outreach', label: 'Outreach' },
];

function linkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [involvedOpen, setInvolvedOpen] = useState(false);
  const pathname = usePathname();

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setInvolvedOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <Link href="/" className="flex items-center shrink-0" onClick={closeMobile} aria-label="Assisi Animal Sanctuary home">
            <Image
              src="/logo.jpg"
              alt="Assisi Animal Sanctuary — Help for the Helpless"
              width={56}
              height={56}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                  linkActive(pathname, link.href)
                    ? 'text-gray-900 bg-yellow-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                className="px-3 py-2 rounded-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                aria-expanded={involvedOpen}
                aria-haspopup="true"
                onClick={() => setInvolvedOpen((open) => !open)}
                onBlur={(e) => {
                  if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) {
                    setInvolvedOpen(false);
                  }
                }}
              >
                More
              </button>
              {involvedOpen ? (
                <div className="absolute right-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  {involvedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-gray-900"
                      onClick={() => setInvolvedOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/adopt" className="btn-outline text-sm py-2 px-4">
              Find a pet
            </Link>
            <Link href="/donate" className="btn-secondary text-sm py-2 px-4">
              Donate now
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-1 pt-4" aria-label="Mobile">
              {[...navLinks, ...involvedLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium py-2 px-4 rounded-lg ${
                    linkActive(pathname, link.href)
                      ? 'bg-yellow-50 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <Link href="/adopt" className="btn-outline text-center" onClick={closeMobile}>
                  Find a pet
                </Link>
                <Link href="/donate" className="btn-secondary text-center" onClick={closeMobile}>
                  Donate now
                </Link>
              </div>
            </nav>
          </div>
        ) : null}
      </div>

      <div className="bg-yellow-400 text-gray-900 py-2 px-4 text-center text-sm">
        <span className="font-semibold">Urgent appeal:</span> Help us build a dedicated Cat Intake Unit.{' '}
        <Link href="/donate" className="underline hover:no-underline font-semibold">
          Donate today →
        </Link>
      </div>
    </header>
  );
}
