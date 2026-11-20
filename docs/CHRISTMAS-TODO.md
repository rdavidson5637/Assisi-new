# Christmas Page & Site Placeholders (For Ryan to Fill In)

This checklist lists every placeholder introduced for `/christmas` (PR #5) and every related detail Ryan needs real values for before publishing Christmas promotions for Assisi Animal Sanctuary.

No dates, venues, prices, fundraising targets, payment links, charity numbers, or form endpoints were invented. While a placeholder stays as `TODO_*`, `/christmas` falls back safely to existing routes (`/donate`, `/shops`, `/contact`) so no broken links appear on the live site.

---

## 1. URL Placeholders in `src/data/christmas.ts`

Replace each `TODO_CHRISTMAS_*` constant in `src/data/christmas.ts` (`christmasLinks`) with the live URL once confirmed:

| Key (`christmasLinks.*`) | Current Placeholder | Current Fallback | What Ryan Needs |
| --- | --- | --- | --- |
| `appealUrl` | `TODO_CHRISTMAS_APPEAL_URL` | `/donate` | Live Christmas appeal donation URL (e.g. JustGiving / Enthuse / PayPal / Stripe link if Assisi has one), or leave fallback on `/donate`. |
| `eventsCalendarUrl` | `TODO_CHRISTMAS_EVENTS_URL` | `/contact` | Live festive events listing URL (e.g. Facebook Events page or Eventbrite organiser page), if Assisi wants an external link from the events section. |
| `giftShopUrl` | `TODO_CHRISTMAS_GIFT_SHOP_URL` | `/shops` | Online Christmas cards / calendar / gift shop URL if Assisi sells seasonal items online; otherwise leave unset so visitors are directed to `/shops`. |
| `fundraisingPackUrl` | `TODO_CHRISTMAS_FUNDRAISING_PACK_URL` | `/contact` | Downloadable Christmas fundraising pack PDF or sign-up page URL, if Assisi has one. |

Note: `tests/christmas.test.mjs` currently asserts that `christmasLinks` uses `TODO_CHRISTMAS_*` placeholders and that `christmasEvents` is empty. Update those two expectations in `tests/christmas.test.mjs` when you replace placeholders with real values.

---

## 2. Christmas Events Data (`christmasEvents` in `src/data/christmas.ts`)

Currently `christmasEvents` is `[]`, so `/christmas` displays the honest empty state: *"Christmas events will be announced soon."*

For each confirmed event Assisi supplies, add an entry matching `ChristmasEvent`:

```ts
{
  id: 'unique-slug',
  title: 'Confirmed event name',
  dateLabel: 'Confirmed date (e.g. Saturday 12 December)',
  timeLabel: 'Confirmed time (optional, e.g. 10am-3pm)',
  venue: 'Confirmed venue name and town',
  summary: 'Plain-English summary (no em/en dashes; keep facts confirmed by Assisi).',
  bookingUrl: 'Confirmed ticket/info URL, or omit / leave TODO_* to fall back to /contact',
}
```

Details to confirm for each event:
- [ ] Exact event title
- [ ] Confirmed date(s) and start/end times
- [ ] Confirmed venue name, address, or town
- [ ] Ticket price / entry fee (if any) and booking URL (if any)
- [ ] Any age restrictions or dog-friendly notes

---

## 3. Seasonal Pricing, Gifts, and Copy to Confirm

Only amounts already published elsewhere on the site are shown on `/christmas` (`£15/year` annual membership from `/membership`, `20p a day` sponsorship from `/` and `/sponsor`). Confirm with Assisi if they want any Christmas-specific additions:

- [ ] **Christmas appeal target or specific winter cost examples** (e.g. what £10 / £25 / £50 buys at Christmas) - currently omitted rather than invented.
- [ ] **Christmas cards, calendars, or festive merchandise** - confirm prices, stock availability in Bangor/Holywood/Newtownards shops, and whether postal orders are available.
- [ ] **Gift sponsorship / gift membership cut-off date** - confirm last posting date for printed certificates or welcome packs before Christmas.
- [ ] **Festive sanctuary opening hours** - confirm Christmas Eve, Christmas Day, Boxing Day, and New Year hours for Conlig sanctuary and for each charity shop (`src/data/site.ts` and `src/data/shops.ts`).
- [ ] **Online payment / form backend** - `/donate`, `/sponsor`, `/membership`, `/contact`, and `AdoptionForm` still use phone/`mailto:` flows (no card payments or Formspree IDs configured). Confirm if/when Ryan wants to wire a donation gateway or form backend.

---

## 4. Existing Links Reused on `/christmas` (Verify Still Current)

These existing links from `src/data/site.ts` are reused on `/christmas`:
- Amazon WishList: `site.wishlistUrl` (`https://www.amazon.co.uk/hz/wishlist/ls/3S6T34K45JNHT`)
- Paw Prints Magazine: `site.magazine.url` (`https://dmiebooks.com/Client/Assisi/issue102/`, currently labelled `Autumn/Winter 2025` - check if a newer Winter 2026 issue exists)
- Fundraising Manager contact: `site.fundraising` (`Grace`, `grace@assisi-ni.org`, `07598050096` - already published on `/volunteer`)
- Social links: Facebook and Instagram from `site.social`

---

## 5. Pre-Existing Site Discrepancies Noticed During Audit (Left Untouched)

Flagged here for Ryan to confirm with Assisi when convenient (not edited in these PRs):
- **Charity number mismatch:** `src/data/site.ts` (rendered in the footer) lists `NIC104594`, whereas `src/data/shops.ts` (`sanctuary.charityNumber`, currently unused in UI) lists `NIC100079`.
- **Shop count wording:** `src/data/shops.ts` and `/shops` list **three** shops (Bangor, Holywood, Newtownards), while `/membership` and `/volunteer` still say **"four shops"** (mentioning Belfast in `/volunteer`).
