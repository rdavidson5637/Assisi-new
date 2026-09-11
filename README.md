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

## ✨ Improvements Over Original Site

### 1. Pet Listings & Adoption Experience
- **Filterable search** - Filter by species, age, size, gender
- **Compatibility filters** - "Good with children/dogs/cats" checkboxes
- **Personality badges** - Each animal shows traits like "Gentle", "Energetic", "Independent"
- **"Long Stay" highlighting** - Animals waiting 90+ days get a callout banner and a badge on their card/profile
- **Individual profile pages** - Dedicated URL for each animal with SEO benefits
- **In-page adoption application** - Modal form with confirmation

### 2. Donation Experience (Fixed 404!)
- **One-time and monthly options** - Toggle between donation types
- **Quick amount buttons** - £10, £25, £50, £100, plus a custom amount
- **Dedicated pages for every "Ways to Help" link** - `/sponsor`, `/legacy`, `/outreach`, `/membership` all exist now (previously 404s)
- **Sponsorship tiers** - £6/£12/£20 per month, each with a description of what it funds
- **Legacy giving** - Types of gift, why it matters, how to get started
- **Membership** - £15/year with listed member benefits

### 3. Modern Design & UX
- **Mobile-first responsive** - Works beautifully on all devices
- **Clean navigation** - Simplified menu with clear user journeys
- **Sticky header** - CTAs always visible
- **Card hover effects** - Modern micro-interactions
- **Consistent branding** - Emerald green, amber accents

### 4. Performance
- **Next.js 16** - Server-side rendering for fast page loads
- **Image optimization** - Lazy loading, responsive images
- **Static generation** - Pre-built pages for instant loading
- **Tailwind CSS** - Optimized, minimal CSS bundle

### 5. Accessibility
- **Skip to content link** - Keyboard navigation support
- **ARIA labels** - Screen reader friendly
- **Color contrast** - WCAG AA compliant
- **Focus indicators** - Visible focus states
- **Semantic HTML** - Proper heading hierarchy

### 6. Content Improvements
- **Impact statistics** - "2,547+ animals rehomed since 1997"
- **Success stories** - "Happy Tails" section with adopter testimonials
- **Ways to help** - Clear paths for donate, volunteer, foster, sponsor
- **Urgent appeal banner** - Cat Intake Unit fundraising
- **FAQ section** - Common questions answered

### 7. Forms & Applications
- **Multi-step adoption form** - Logical progression
- **Volunteer application** - Role selection with requirements
- **Contact form** - Subject categories, consent checkbox
- **Form validation** - Required fields, confirmation messages

### 8. SEO Optimizations
- **Meta tags** - Title, description, Open Graph
- **Individual animal URLs** - `/adopt/teddy`, `/adopt/banjo`
- **Semantic markup** - Proper HTML5 elements
- **Local SEO ready** - Address, phone, map integration

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
- **Primary (Ink)**: `#1a1a1a` - Headings, primary buttons, footer
- **Secondary (Yellow)**: `#fbbf24` - Brand color, hero sections, CTAs
- **Accent (Pink)**: `#db2777` - Urgent appeals, "Long Stay" highlighting

### Typography
- **Font**: Inter (system font fallback)
- **Headings**: Bold, large for impact
- **Body**: Regular weight, comfortable reading

### Components
- **Cards**: Rounded corners (2xl), shadow, hover effects
- **Buttons**: Primary (emerald), Secondary (amber), Outline
- **Forms**: Large touch targets, clear labels, validation

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
  image: 'https://...',
  description: 'About this pet...',
  personality: ['Trait1', 'Trait2', 'Trait3'],
  goodWith: { children: true, dogs: false, cats: true },
  specialNeeds: false,
  rehomingFee: 170,
  daysAtSanctuary: 30,
  reserved: false,
  featured: true
}
```

### Updating Contact Info
- Header: `src/components/Header.tsx`
- Footer: `src/components/Footer.tsx`
- Contact page: `src/app/contact/page.tsx`

## 📝 Next Steps for Production

1. **CMS Integration** - Connect to a headless CMS (Sanity, Strapi) for easy content management
2. **Payment Integration** - Add Stripe or PayPal for donations
3. **Email Integration** - Connect contact/application forms to email service
4. **Analytics** - Add Google Analytics or Plausible
5. **Real Images** - Replace Unsplash placeholders with actual sanctuary photos
6. **API Integration** - Connect to shelter management software if available

## 📄 License

Built with ❤️ for Assisi Animal Sanctuary
