# CKAS-QUALITY-MOBILE (Assisi)

Scoped quality / mobile pass for pages not owned by draft #2 or open PR #12.

## Pages / components
- `/`, `/about`, `/adopt` (list shell only), `/outreach`, `/legacy`
- `Header` donate taps, `ContactLinks` 44px defaults
- Styles: `QualityMobileStyles.tsx` (+ reference `src/styles/quality-mobile.css`). No edits to `globals.css` / `layout.tsx`.

## Checks
Playwright at 360 / 390 / 1280 on the free pages — see `after/` and shoot log in the PR body.

## Avoided
Draft #2: adopt/[id], donate, membership, shops, sponsor, globals, layout, AdoptBrowser, AdoptionForm, AnimalCard, AnimalProfile, NewsletterSignup.
PR #12: christmas, contact, volunteer, ContactForm, remaining-mobile.css.
