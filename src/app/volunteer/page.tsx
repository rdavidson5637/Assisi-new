import type { Metadata } from "next";
import Link from "next/link";
import { EmailLink, PhoneLink } from "@/components/ContactLinks";
import EdSection from "@/components/editorial/EdSection";
import InnerHero from "@/components/editorial/InnerHero";
import { site } from "@/data/site";
import { shopCountWord, shopTownList } from "@/data/shops";
import { pageMetadata } from "@/lib/metadata";
import "@/styles/remaining-mobile.css";

export const metadata: Metadata = pageMetadata(
  "Volunteer",
  "Volunteer with Assisi Animal Sanctuary in Northern Ireland. Help at the sanctuary, in our charity shops, as a transport driver, foster carer or fundraiser.",
  "/volunteer",
);

const tapPrimary = "as-rm-tap-block btn-primary";
const lead =
  "text-[clamp(1.125rem,1.05rem+0.35vw,1.25rem)] leading-relaxed text-pretty text-ink";

export default function VolunteerPage() {
  const roles = [
    {
      title: "At the Sanctuary",
      body: "If you love animals, maybe you can help clean the kennels and walk the dogs, spend time cuddling cats, or feed the small animals. If you would prefer something more indoors, you could volunteer in Reception, meet and greet visitors, help with admin duties and answering the telephone. If you're handy, help keep our site in great condition with some general maintenance.",
    },
    {
      title: "Transport Drivers",
      body: "If you like to drive, help us transport our animals to and from the vets, or support our rehoming team as they travel around the country doing important rescue work. (Driving volunteers must be 21+; conditions apply)",
    },
    {
      title: "In our Shops",
      body: `Our ${shopCountWord()} shops in ${shopTownList()} need volunteers to work shifts, help serve customers, sort stock, and make deliveries. The shops are a vital source of income for the Sanctuary, so for just a few hours a week, you can make a huge contribution to the work we do here!`,
    },
    {
      title: "Fostering",
      body: "Joining our fostering team is a fantastic way to help with the animals for those who can't commit to a weekly shift at the Sanctuary. Maybe there is an overlooked golden oldie searching for a retirement home, or an abandoned mum looking for a safe space to raise her babies. Maybe there is a forgotten soul recovering from surgery or who has a life-limiting illness. They may require daily medication or regular trips to the vet, but you know you will be able to give them the love and quality of life they deserve. You will be giving them a second chance, and in return you will receive unconditional love; what more could anyone want!",
    },
    {
      title: "Fundraising & Events",
      body: (
        <>
          <p className="mb-3">
            Fundraising is crucial to the survival of the charity; the money goes straight to the
            animals, paying for their food, vet bills, and care. There are so many ways you can help
            us raise these indispensable funds and allow us to continue to care for and rescue many
            more animals, such as volunteering at street collections, bag packs, and sponsored walks,
            helping with collection cans, joining our support groups and more!
          </p>
          <p>
            You can contact our Fundraising Manager, {site.fundraising.name} by email at{" "}
            <a href={site.fundraising.emailHref} className="link">
              {site.fundraising.email}
            </a>{" "}
            or by phone/text on{" "}
            <a href={site.fundraising.phoneHref} className="link">
              {site.fundraising.phoneDisplay}
            </a>
            .
          </p>
        </>
      ),
    },
    {
      title: "Corporate Teams",
      body: (
        <>
          Are you a company looking to support a charity? Then please consider nominating Assisi as
          your chosen charity of the year! We will provide all the support and materials you need to
          assist your organisation in all fundraising activity you chose to do. Alternatively,
          volunteer your staff time to help at the Sanctuary. If you would like to discuss corporate
          volunteering, email <EmailLink className="link" />
        </>
      ),
    },
    {
      title: "Placement / Work Experience",
      body: "Are you currently studying for a career working with animals and need to complete a practical module towards your qualification? Assisi believes education plays a significant role in furthering the welfare of animals now and in the future, so why not apply for one of our placement spaces to gain real-world experience in the animal welfare sector!",
    },
  ] as const;

  return (
    <div className="as-rm bg-cream">
      <InnerHero
        title="Become a Volunteer"
        subtitle="Let's help animals together"
        photo={{
          src: "/images/animals/nora.jpg",
          alt: "Nora, a cat at Assisi Animal Sanctuary",
        }}
        focus="50% 35%"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className={`max-w-[65ch] space-y-5 ${lead}`}>
          <p>
            Can you spare 3-4 hours each week? By volunteering with us you will meet new people, gain
            new or use existing skills, gain experience and ultimately make a big difference to animal
            welfare.
          </p>
          <p>
            Without our dedicated volunteers, we could not continue with the work we do, and there is
            so much to do! Volunteering with us is very rewarding, you are helping us make a
            difference to so many animals&apos; lives. We have several different volunteer roles, so
            there is something to suit everyone!
          </p>
          <p className="text-base text-ink/70">
            *Volunteers / placements must be 18+ to help with our animals, in reception or participate
            in fundraising events. Volunteers must be 16+ to help in our shops.
          </p>
        </div>
      </div>

      <EdSection id="roles" title="Volunteer roles" layout="stack">
        <div>
          {roles.map((role) => (
            <article key={role.title} className="as-rm-row md:grid-cols-[16rem_minmax(0,1fr)]">
              <h3 className="as-rm-row-title">{role.title}</h3>
              <div className="as-rm-row-body md:col-span-1">{role.body}</div>
            </article>
          ))}
        </div>
      </EdSection>

      <section aria-labelledby="get-involved-heading" className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2
                id="get-involved-heading"
                className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,1.35rem+0.8vw,2rem)] font-semibold leading-[1.15] tracking-[-0.015em] text-balance text-cream"
              >
                How do I get involved?
              </h2>
              <p className="mt-4 max-w-prose text-cream/90">
                It&apos;s easy! If you are interested in volunteering with us, please contact us for a
                chat about how you might be able to help in our work to protect and care for stray or
                unwanted companion animals.
              </p>
              <p className="mt-4 max-w-prose text-cream/85">
                On occasion, we are unable to guarantee there will be a space available for you on
                your preferred day, so we will contact you with other options to see if there are any
                other days that suit or work for you.
              </p>
            </div>
            <div className="space-y-4 lg:col-span-5">
              <p className="text-cream font-medium">
                Contact us at <EmailLink className="inline-flex min-h-11 items-center text-cream underline underline-offset-[0.2em] hover:decoration-2" />{" "}
                or call{" "}
                <PhoneLink className="inline-flex min-h-11 items-center text-cream underline underline-offset-[0.2em] hover:decoration-2" />
              </p>
              <div className="as-rm-cta-row flex flex-wrap gap-x-6 gap-y-3">
                <Link href="/contact" className={tapPrimary}>
                  Contact Assisi
                </Link>
                <Link
                  href="/about"
                  className="as-rm-tap inline-flex items-center font-bold text-cream underline underline-offset-[0.2em] hover:decoration-2"
                >
                  About the sanctuary
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
