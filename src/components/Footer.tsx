import Link from 'next/link';
import { AddressLines, EmailLink, PhoneLink } from '@/components/ContactLinks';
import NewsletterSignup from '@/components/NewsletterSignup';
import { site } from '@/data/site';

const links = [
  { href: '/adopt', label: 'Adopt' },
  { href: '/donate', label: 'Donate' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/shops', label: 'Shops' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
];

function withHyphens(line: string) {
  return line.replaceAll('—', '-').replaceAll('–', '-');
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 max-w-xl">
          <h2 className="font-bold mb-2">Sanctuary news</h2>
          <p className="text-cream/70 text-sm mb-4">
            Animals looking for homes, and the occasional appeal. No more than that.
          </p>
          <NewsletterSignup variant="dark" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <h2 className="font-bold mb-2">Address</h2>
            <AddressLines className="text-cream/80" />
            <p className="text-cream/50 mt-3">Charity {site.charityNumber}</p>
            <p className="text-cream/50">Company {site.companyNumber}</p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Opening hours</h2>
            <p className="text-cream/80">
              {site.openingHours.map((line) => (
                <span key={line} className="block">
                  {withHyphens(line)}
                </span>
              ))}
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Phone and email</h2>
            <p>
              <PhoneLink className="text-cream/80 hover:text-cream" />
            </p>
            <p className="mt-2">
              <EmailLink className="text-cream/80 hover:text-cream" />
            </p>
            <ul className="mt-4 space-y-1 text-cream/80">
              {site.social.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold mb-2">On this site</h2>
            <ul className="space-y-1 text-cream/80">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/15 mt-8 pt-8 text-cream/50 text-sm">
          <p>&copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
