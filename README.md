# Assisi Animal Sanctuary - Redesigned Website

A modern, accessible, and user-friendly website for Assisi Animal Sanctuary, Northern Ireland's independent animal welfare charity.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site runs at [http://localhost:3000](http://localhost:3000)

## Pages

Adopt, donate, sponsor, legacy, outreach, membership, volunteer, shops, about, contact and privacy. Each animal has a page at `/adopt/[id]`. The homepage shows animals marked `featured` in `src/data/animals.ts`.

There is no FAQ, no map, and no multi-step form. A long-stay badge appears only when `daysAtSanctuary` is 90 or more.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout with header/footer
│   ├── globals.css           # Global styles
│   ├── adopt/
│   │   ├── page.tsx          # Pet listings with filters
│   │   └── [id]/page.tsx     # Individual animal profile
│   ├── donate/page.tsx       # Donation page
│   ├── sponsor/page.tsx      # Monthly sponsorship tiers
│   ├── legacy/page.tsx       # Gifts in wills
│   ├── outreach/page.tsx     # Community outreach scheme
│   ├── membership/page.tsx   # Annual membership
│   ├── volunteer/page.tsx    # Volunteer information
│   ├── about/page.tsx        # About the sanctuary
│   └── contact/page.tsx      # Contact form & info
├── components/
│   ├── Header.tsx            # Navigation & CTAs
│   ├── Footer.tsx            # Links & newsletter
│   └── AnimalCard.tsx        # Pet listing card
└── data/
    └── animals.ts            # Animal data & types
```

## 🎨 Design System

### Colors
- **Cream**: `#FBF7EE` - page background
- **Ink**: `#171717` - text and dark sections
- **Yellow**: `#F6E823` - logo, appeal bar, primary button
- **Teal**: `#0F4C4C` - text links

### Typography
- **Headings**: Bricolage Grotesque
- **Body**: Figtree
- **Headings**: Bold, large for impact
- **Body**: Regular weight, comfortable reading

### Components
- **Panels**: 1px line, 12px radius, no shadow
- **Buttons**: one yellow primary button, teal underlined text links
- **Forms**: labelled fields, and no success message unless the message was actually sent

## 🔧 Customization

### Adding Animals
Edit `src/data/animals.ts`:

```typescript
{
  id: 'unique-slug',
  name: 'Pet Name',
  species: 'dog' | 'cat' | 'rabbit' | 'guinea-pig' | 'other',
  breed: 'Breed Name',
  age: '3 years',
  ageCategory: 'baby' | 'young' | 'adult' | 'senior',
  gender: 'male' | 'female',
  size: 'small' | 'medium' | 'large',
  image: '/images/animals/pet-name.jpg',
  description: 'About this pet...',
  personality: [],
  goodWith: { children: 'unknown', dogs: 'unknown', cats: 'unknown' },
  specialNeeds: false,
  rehomingFee: 170,
  daysAtSanctuary: null,
  reserved: false,
  featured: true
}
```

### Updating Contact Info
- Header: `src/components/Header.tsx`
- Footer: `src/components/Footer.tsx`
- Contact page: `src/app/contact/page.tsx`

## Production

Copy `.env.example` to `.env.local`.

- `STRIPE_SECRET_KEY` turns on card checkout at `/donate` (one-off and monthly, with an optional Gift Aid declaration). Without it, the page tells people to give by phone or email.
- `FORMSPREE_FORM_ID` delivers contact, adoption, volunteer, newsletter, sponsorship and membership enquiries. Without it, contact and adoption offer an email draft. The other forms give the phone number and email. None of them show a success message for a message that was not sent.
- Sponsorship and membership requests do not take payment. The team sets up the standing order or membership after they receive the request.
- A Gift Aid tick sends the declaration with the Stripe payment and asks Stripe for a billing address. Assisi still makes the claim with HMRC.

Animal records live in `src/data/animals.ts`. `daysAtSanctuary` stays empty until the sanctuary publishes a wait time.

## 📄 License

Built with ❤️ for Assisi Animal Sanctuary
