import type { Metadata } from 'next';
import { EmailLink, PhoneLink } from '@/components/ContactLinks';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'How Assisi Animal Sanctuary handles personal information sent through this website, and a link to the charity privacy policy.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-cream border-b border-line py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-ink">Privacy</h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-ink/80 space-y-6">
        <p>
          {site.legalName} (known as {site.name}) is the data controller. The charity&apos;s own
          privacy policy, last updated 15 October 2024, is the document that governs how Assisi
          uses personal information.
        </p>
        <p>
          <a href={site.privacyPolicyPdf} className="btn-secondary" target="_blank" rel="noopener noreferrer">
            Read the charity privacy policy (PDF)
          </a>
        </p>
        <h2 className="text-2xl font-bold text-ink">What this website sends</h2>
        <p>
          Contact, adoption, volunteer, sponsorship, membership and newsletter forms are delivered
          to the sanctuary by Formspree once that account is connected. Until then, contact and
          adoption forms offer an email draft to {site.email}. The other forms ask you to phone or
          email the sanctuary, instead of pretending the message was received.
        </p>
        <p>
          Card donations are taken by Stripe. Assisi does not see or store your card number. A Gift
          Aid declaration, if you tick it, is stored with the payment along with the name and
          address Stripe collects for that claim.
        </p>
        <p>
          This site does not set analytics or advertising cookies. It does not sell or swap your
          details.
        </p>
        <h2 className="text-2xl font-bold text-ink">Registered details</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Charity Commission for Northern Ireland: {site.charityNumber}</li>
          <li>Company number: {site.companyNumber}</li>
          <li>HMRC charity reference: {site.hmrcReference}</li>
        </ul>
        <p>
          {site.addressLines.join(', ')}. Phone <PhoneLink className="underline" />. Email{' '}
          <EmailLink className="underline" />.
        </p>
      </div>
    </div>
  );
}
