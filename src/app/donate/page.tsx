import Link from 'next/link';
import DonateForm from '@/components/DonateForm';
import { EmailLink, PhoneLink } from '@/components/ContactLinks';
import { site } from '@/data/site';
import { paymentsEnabled } from '@/lib/stripe';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink">Make a Donation</h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-lg text-ink/80">
            Every donation is a lifeline. Assisi relies on donations from individuals and organisations
            within our community to keep our Sanctuary going. Your donation will make a huge difference
            to the wellbeing of the animals in our care and help us to provide the much needed day to
            day requirements to meet their welfare needs.
          </p>
        </div>

        <DonateForm paymentsEnabled={paymentsEnabled()} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="panel p-6">
            <h2 className="text-lg font-bold text-ink mb-3">Sponsorship</h2>
            <p className="text-ink/70 mb-4">
              For as little as 20p a day, you could provide multiple unwanted and homeless animals
              each year with warm shelter, food, medical care and the love and happiness they deserve
              until they find their forever home.
            </p>
            <Link href="/sponsor" className="btn-secondary">
              Become a Sponsor →
            </Link>
          </div>

          <div className="panel p-6">
            <h2 className="text-lg font-bold text-ink mb-3">Leave a Legacy</h2>
            <p className="text-ink/70 mb-4">
              A gift left in your Will is a great way to ensure that your love of animals and
              interest in their well-being is continued into the future.
            </p>
            <Link href="/legacy" className="btn-secondary">
              Learn More →
            </Link>
          </div>

          <div className="panel p-6">
            <h2 className="text-lg font-bold text-ink mb-3">Amazon WishList</h2>
            <p className="text-ink/70 mb-4">
              We always look forward to our Amazon deliveries! Many of our supporters like to help
              us by buying things from the list that they know our animals will like.
            </p>
            <a href={site.wishlistUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              View Wishlist →
            </a>
          </div>

          <div className="panel p-6">
            <h2 className="text-lg font-bold text-ink mb-3">Membership</h2>
            <p className="text-ink/70 mb-4">
              Your support helps us feed the animals in our care, give them excellent veterinary
              treatment and provide them with toys and treats.
            </p>
            <Link href="/membership" className="btn-secondary">
              Become a Member →
            </Link>
          </div>
        </div>

        <div className="mt-8 panel p-6">
          <h2 className="font-bold text-ink mb-3">Other ways to donate</h2>
          <p className="text-ink/70">
            For bank transfer details, standing orders, or a gift over £10,000, contact us at{' '}
            <EmailLink className="underline" /> or call <PhoneLink className="underline" />.
          </p>
        </div>
      </div>
    </div>
  );
}
