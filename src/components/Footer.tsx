import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '@/components/SocialLinks';
import { sanctuary } from '@/data/shops';
import { plainDashes } from '@/lib/text';

// Footer sits on ink, so links are paper with an underline.
const footerLink =
  'underline underline-offset-4 decoration-1 decoration-white/40 hover:decoration-white hover:text-white';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/logo.jpg"
              alt="Assisi Animal Sanctuary"
              width={64}
              height={64}
              className="h-16 w-auto rounded mb-4"
            />
            <p className="text-gray-300 text-sm">
              Help for the helpless since 1997. A local, independent, no-kill animal welfare charity
              in Northern Ireland.
            </p>
            <p className="text-gray-400 text-sm mt-3">
              Registered Charity {sanctuary.charityNumber}
            </p>
            <SocialLinks className="mt-5" />
          </div>

          <div>
            <h4 className="font-bold mb-4">Visit &amp; adopt</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/adopt" className={footerLink}>Adopt a pet</Link></li>
              <li><Link href="/shops" className={footerLink}>Charity shops</Link></li>
              <li><Link href="/about" className={footerLink}>About us</Link></li>
              <li><Link href="/contact" className={footerLink}>Contact &amp; hours</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Get involved</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/donate" className={footerLink}>Make a donation</Link></li>
              <li><Link href="/volunteer" className={footerLink}>Volunteer</Link></li>
              <li><Link href="/sponsor" className={footerLink}>Sponsorship</Link></li>
              <li><Link href="/membership" className={footerLink}>Membership</Link></li>
              <li><Link href="/legacy" className={footerLink}>Leave a legacy</Link></li>
              <li><Link href="/outreach" className={footerLink}>Outreach</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Sanctuary</h4>
            <address className="not-italic text-gray-300 text-sm space-y-2">
              <p>
                {sanctuary.address}<br />
                {sanctuary.town}<br />
                {sanctuary.postcode}
              </p>
              <p>{plainDashes(sanctuary.hours)}<br />{sanctuary.sunday}</p>
              <p>
                <a href={`tel:${sanctuary.phone.replace(/\s/g, '')}`} className={footerLink}>
                  {sanctuary.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${sanctuary.email}`} className={footerLink}>
                  {sanctuary.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/15 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Assisi Animal Sanctuary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
