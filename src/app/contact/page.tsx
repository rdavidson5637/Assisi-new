import { AddressLines, EmailLink, PhoneLink } from "@/components/ContactLinks";
import ContactForm from "@/components/ContactForm";
import InnerHero from "@/components/editorial/InnerHero";
import { site } from "@/data/site";
import { plainDashes } from "@/lib/text";
import "@/styles/remaining-mobile.css";

const contactLinkClass = "link inline-flex min-h-11 items-center";

export default function ContactPage() {
  return (
    <div className="as-rm bg-cream">
      <InnerHero
        title="Contact Us"
        subtitle="Get in touch with the team at Assisi Animal Sanctuary in Conlig."
        tone="paper"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,1.35rem+0.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-ink mb-8">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-ink mb-2">Address</h3>
                <AddressLines className="text-ink/70" />
              </div>

              <div>
                <h3 className="font-bold text-ink mb-2">Phone</h3>
                <p>
                  <PhoneLink className={contactLinkClass} />
                </p>
              </div>

              <div>
                <h3 className="font-bold text-ink mb-2">Email</h3>
                <p>
                  <EmailLink className={contactLinkClass} />
                </p>
              </div>

              <div>
                <h3 className="font-bold text-ink mb-2">Opening Hours</h3>
                <p className="text-ink/70">
                  {site.openingHours.map((line) => (
                    <span key={line} className="block">
                      {plainDashes(line)}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7 lg:border-l lg:border-line lg:pl-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
