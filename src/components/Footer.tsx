import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About */}
          <div>
            <img 
              src="/logo.jpg" 
              alt="Assisi Animal Sanctuary" 
              className="h-16 w-auto rounded mb-4"
            />
            <p className="text-gray-400 text-sm">
              Help for the helpless since 1997. A local, independent animal welfare charity in Northern Ireland.
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Registered Charity NIC100079
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/adopt" className="hover:text-white">Adopt a Pet</Link></li>
              <li><Link href="/donate" className="hover:text-white">Make a Donation</Link></li>
              <li><Link href="/volunteer" className="hover:text-white">Volunteer</Link></li>
              <li><Link href="/sponsor" className="hover:text-white">Sponsorship</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/membership" className="hover:text-white">Membership</Link></li>
              <li><Link href="/legacy" className="hover:text-white">Leave a Legacy</Link></li>
              <li><Link href="/outreach" className="hover:text-white">Outreach</Link></li>
              <li>
                <a 
                  href="https://www.amazon.co.uk/hz/wishlist/ls/example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Amazon Wishlist
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>
                1 Old Bangor Road<br />
                Conlig, Newtownards<br />
                BT23 7PU
              </p>
              <p>
                <a href="tel:02891812622" className="hover:text-white">028 9181 2622</a>
              </p>
              <p>
                <a href="mailto:info@assisi-ni.org" className="hover:text-white">info@assisi-ni.org</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Assisi Animal Sanctuary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
