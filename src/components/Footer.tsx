import { AddressLines, EmailLink, PhoneLink } from '@/components/ContactLinks';
import { site } from '@/data/site';

function withHyphens(line: string) {
  return line.replaceAll('—', '-').replaceAll('–', '-');
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <h2 className="font-bold mb-2">Address</h2>
            <AddressLines className="text-cream/80" />
            <p className="text-cream/50 mt-3">Registered Charity {site.charityNumber}</p>
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
            <h2 className="font-bold mb-2">Phone</h2>
            <p>
              <PhoneLink className="text-cream/80 hover:text-cream" />
            </p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Email</h2>
            <p>
              <EmailLink className="text-cream/80 hover:text-cream" />
            </p>
          </div>
        </div>

        <div className="border-t border-cream/15 mt-8 pt-8 text-cream/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Assisi Animal Sanctuary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
