export const site = {
  name: 'Assisi Animal Sanctuary',
  charityNumber: 'NIC104594',
  addressLines: ['1 Old Bangor Road', 'Conlig, Newtownards', 'BT23 7PU'],
  phoneDisplay: '028 9181 2622',
  phoneHref: 'tel:02891812622',
  email: 'info@assisi-ni.org',
  emailHref: 'mailto:info@assisi-ni.org',
  fundraising: {
    name: 'Grace',
    email: 'grace@assisi-ni.org',
    emailHref: 'mailto:grace@assisi-ni.org',
    phoneDisplay: '07598050096',
    phoneHref: 'tel:07598050096',
  },
  openingHours: ['Monday – Saturday: 12pm – 4pm', 'Sunday: Closed'],
  wishlistUrl: 'https://www.amazon.co.uk/hz/wishlist/ls/3S6T34K45JNHT',
  magazine: {
    title: 'Paw Prints',
    edition: 'Autumn/Winter 2025',
    url: 'https://dmiebooks.com/Client/Assisi/issue102/',
    cover: '/images/paw-prints-cover.jpg',
  },
  social: [
    { label: 'Facebook', href: 'https://en-gb.facebook.com/AssisiAnimalSanctuary/' },
    { label: 'Instagram', href: 'https://www.instagram.com/assisianimalsanctuary/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/assisi-animal-sanctuary' },
  ],
} as const;

export function mailtoHref(subject: string, body: string) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${site.email}?${params.toString()}`;
}
