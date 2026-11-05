# Polish audit

Read-only pass on `main` at `4a366d0`. No page, layout, CSS, or data edits in this step.

## Fonts

No Inter, Roboto, or Arial in the repo.

- `src/app/layout.tsx` loads Figtree as `--font-body` and Bricolage Grotesque as `--font-heading`, both through `next/font/google`.
- `src/app/globals.css` falls back to `ui-sans-serif, system-ui, sans-serif` on `--font-sans`, `--font-heading`, `body`, and every heading.
- `src/app/opengraph-image.tsx` sets `fontFamily: 'sans-serif'` on the social image.

## Gradients

No `linear-gradient` in CSS. Two Tailwind gradients:

- `src/app/page.tsx`: `bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25` over the homepage hero photo.
- `src/components/HappyTailsSlideshow.tsx`: `bg-gradient-to-t from-ink/80 via-ink/10 to-transparent`. No page imports this component.

## Rounded-2xl shadow cards

Live:

- `src/app/shops/page.tsx`: shop articles use `bg-white rounded-2xl shadow-sm`. "Donate goods" uses `rounded-2xl shadow-sm`. "Volunteer in a shop" uses `bg-yellow-50 rounded-2xl` with no shadow.

Not mounted (no page imports them):

- `src/components/AnimalProfile.tsx`: `rounded-2xl shadow-sm` profile card, `rounded-2xl shadow-xl` dialog, `rounded-2xl` success panel.
- `src/components/VolunteerForm.tsx`: `rounded-2xl shadow-sm` form and `rounded-2xl` success panel.

The shared `.panel` in `src/app/globals.css` is flat (`box-shadow: none`, 1px line, 12px radius). Homepage, adopt, donate, and most inner pages already use it.

## Three-up rows

No three-icon feature row.

Equal-width three-column rows:

- `src/app/shops/page.tsx`: `md:grid-cols-3` shop cards.
- `src/app/page.tsx`: `md:grid-cols-3` shop names and addresses.
- `src/app/sponsor/page.tsx`: `sm:grid-cols-3` sponsorship tiers (£6, £12, £20).
- `src/app/legacy/page.tsx`: `sm:grid-cols-3` gift types (residuary, pecuniary, specific).
- `src/components/AdoptBrowser.tsx`: rehoming fees use `sm:grid-cols-3` on the way to six columns. Those amounts stay.

## Emoji

None in `src/`.

## Happy tails

`src/data/successStories.ts` exports one story: Francesca, image `/images/stories/francesca.jpg` (a local path, not an Unsplash URL), adopter name Elizabeth Rea. `src/components/HappyTailsSlideshow.tsx` is the only reader. Nothing imports that component. `src/app/page.tsx` has a comment in its place: restore only with real, consented stories.

Do not show this data. Do not replace it with new stories.

## Amazon wishlist

`src/data/site.ts` `wishlistUrl` is `https://www.amazon.co.uk/hz/wishlist/ls/3S6T34K45JNHT`. The href does not contain "example".

Shown as a link on:

- `src/app/page.tsx` ("View wishlist")
- `src/app/donate/page.tsx` ("View Wishlist")

An href that contains "example" stays hidden. This one does not, so both links stay.

## Cat Intake bar

No progress element and no fixed percentage width. `src/app/page.tsx` is a yellow band with the sentence "Help us build a dedicated Cat Intake Unit." and a Donate link. The sentence states no percentage and no amount raised. `style={{ width: '9rem' }}` on the same page is the magazine cover, not a fundraising bar.

## Donate copy that sounds like a completed payment

`src/app/donate/page.tsx`, after the button click:

- "Thank you for choosing to give £{amount}."
- "Online card payments are launching soon."

The button label is "Donate £{amount}" or "Donate £{amount} per month". A quieter line already says card payments are not available on the page. The control does not charge a card.

Related, not the donate page:

- `src/app/sponsor/page.tsx`: "Thank you for choosing to sponsor at £{amount}/month!" and "Online sign-up is launching soon."
- `src/app/membership/page.tsx`: "Thank you for joining Assisi!" and "Online sign-up is launching soon."

## ShelterLink

No ShelterLink link or mention in `src/` or the README.

## Em dashes and en dashes in visible copy

Page and component copy (em dash `—` unless noted):

- `src/app/adopt/[id]/page.tsx`: "{label} — no", "{label} — ask us".
- `src/app/legacy/page.tsx`: three sentences (lasting difference, no government funding, say thank you).
- `src/app/membership/page.tsx`: "plan ahead — covering everything".
- `src/app/not-found.tsx`: "The animals are still here —".
- `src/app/opengraph-image.tsx`: alt and image text "Assisi Animal Sanctuary — Help for the Helpless".
- `src/app/outreach/page.tsx`: two sentences, one of them with a pair of dashes around "pets included".
- `src/app/shops/page.tsx`: hero subtitle, and "taxpayer — ask in store".
- `src/app/sponsor/page.tsx`: "one animal alone — it keeps the Sanctuary running".
- `src/app/volunteer/page.tsx`: two en dashes (`–`) in the intro.
- `src/components/AdoptBrowser.tsx`: "90+ days for a home —", plus two en dashes in the rehoming steps.
- `src/components/AnimalProfile.tsx`: " — no" on good-with lines. Not mounted.
- `src/components/HappyTailsSlideshow.tsx`: "— {adopter}". Not mounted.
- `src/components/VolunteerForm.tsx`: role label and "Thanks — we'll be in touch". Not mounted.

`src/components/Footer.tsx` already rewrites em and en dashes to hyphens before showing opening hours. `src/app/contact/page.tsx` prints `site.openingHours` as stored, so the en dashes in `src/data/site.ts` ("Monday – Saturday: 12pm – 4pm") are visible there. Shop hours in `src/data/shops.ts` use the same en dash and show on `src/app/shops/page.tsx`.

Animal bios and special-needs lines in `src/data/animals.ts` also contain em and en dashes. Those stay. See "Leave as real content".

## What A2 will change

Type and colour tokens only. No page components.

- `src/app/layout.tsx`: Fraunces for h1 and h2, Atkinson Hyperlegible for everything else, both through `next/font`. Drop Figtree and Bricolage Grotesque.
- `src/app/globals.css`: drop the `system-ui` stack. Set ink `#1a1a1a`, paper `#f6f1e6`, button fill `#fbbf24`, button text `#1a1a1a`, button hover `#e0a810`. Line colour about 15% ink. One flat panel, no shadow. Heading font on h1 and h2 only.
- Current tokens to replace: cream `#FBF7EE`, ink `#171717`, yellow `#F6E823`, teal `#0F4C4C`, line at 12% opacity. `.btn-primary` hover is a brightness filter today; A2 makes it the amber hover colour.
- `prefers-reduced-motion` for the global `scroll-behavior` and button transition.

Pages that use raw Tailwind colours (`gray-900`, `yellow-400`, `yellow-50`, `yellow-600`, `bg-teal`, `text-teal`) will not pick up the new tokens until A3 or A4. That includes `src/app/shops/page.tsx`, `src/components/PageHero.tsx`, `src/app/not-found.tsx`, `src/components/Header.tsx` (teal link hover), and `src/components/AnimalCard.tsx` (teal "Long Stay" chip).

## What A3 will change

Homepage, adopt, volunteer, donate.

- Homepage: remove the hero gradient. Keep a flat scrim so the headline stays readable on the photo. Keep the Cat Intake sentence. There is no bar to remove. Do not mount Happy Tails. Leave the Amazon link, because the href does not contain "example".
- Adopt: stop the photo scale on hover in `src/components/AnimalCard.tsx` (colour or underline only). Rewrite the em and en dashes in `src/app/adopt/[id]/page.tsx` and `src/components/AdoptBrowser.tsx`. Leave the fee figures.
- Volunteer: rewrite the two en dashes. Do not mount `VolunteerForm`.
- Donate: the button must not read as a completed card payment. Replace the thank-you and the "launching soon" line with a request to call or email. Keep the amount choices.

## What A4 will change

About, shops, sponsor, legacy, outreach, membership, contact, header, footer.

- Shops: drop `rounded-2xl` shadow cards and the yellow `PageHero`. Use the flat panel. Keep the three shops. Rewrite the em dashes in the subtitle and Gift Aid line. Show hour ranges with a hyphen. Do not change the times.
- Sponsor and membership: rewrite dashes, and rewrite the thank-you states so they do not sound like a completed signup or a working online payment. Keep the amounts and the perk sentences already on the page.
- Legacy and outreach: rewrite dashes. Legacy gift types can leave the three-column grid for ruled rows. The three gift types stay.
- About: plain copy on the donation close. No new claims.
- Contact: show opening hours with a hyphen. Address, phone, and email stay.
- Header and footer: links are ink with an underline, not teal. Footer phone, address, and charity number stay.
- `src/app/not-found.tsx` has the same yellow, gray, and em dash issues. It is outside this page list, so A4 will not edit it.

## Leave as real content

- `src/data/animals.ts`: names, photos, bios, fees, and the dashes already in those bios.
- Rehoming fees on the adopt page: dogs £170, puppies £200, cats and kittens £100, rabbits £45, guinea pigs £20, rats £15.
- Sanctuary phone `028 9181 2622`, email `info@assisi-ni.org`, address 1 Old Bangor Road, Conlig, Newtownards, BT23 7PU.
- Fundraising contact already on the volunteer page: Grace, `grace@assisi-ni.org`, `07598050096`.
- Shop names, streets, postcodes, and phones in `src/data/shops.ts`, and the hours as facts (display hyphen only).
- Sponsorship copy "20p a day" and tiers £6, £12, and £20 a month.
- Membership £15 a year and the perk list already written, including the "four shops" line. Do not add a Belfast shop to match it. Volunteer copy that names four shops, including Belfast, stays as written.
- Donate choices £10, £25, £50, £100.
- Footer charity number from `src/data/site.ts` (`NIC104594`). `src/data/shops.ts` also has `NIC100079` on an unused `sanctuary` object. Do not pick a winner.
- Paw Prints, Autumn/Winter 2025, and its existing magazine URL.
- `src/data/successStories.ts` as it stands: do not show it, do not replace it.
- The Amazon wishlist URL above, because it does not contain "example".

## Out of scope

Staff CMS, domain cutover, a donation platform, Google Business, social post templates, and any ShelterLink link. Donate does not take cards.
