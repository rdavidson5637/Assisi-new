export interface Shop {
  id: string;
  name: string;
  address: string;
  postcode: string;
  phone: string;
  hours: string;
  donations: string;
  notes?: string;
}

export const shops: Shop[] = [
  {
    id: 'bangor',
    name: 'Bangor',
    address: '59 Main Street, Bangor',
    postcode: 'BT20 5AF',
    phone: '028 9131 2885',
    hours: 'Monday – Saturday 10am–4pm (closed Sunday)',
    donations: 'Mon–Fri 10am–4pm via the front door; Saturday 10am–1pm via the back door by Bingham Lane Car Park.',
    notes: 'Large items at the back door only, please.',
  },
  {
    id: 'holywood',
    name: 'Holywood',
    address: '60 High Street, Holywood',
    postcode: 'BT18 9AE',
    phone: '028 9042 6362',
    hours: 'Monday – Saturday 10am–4pm (closed Sunday)',
    donations: 'Same hours as above, in-store via the front door.',
  },
  {
    id: 'newtownards',
    name: 'Newtownards',
    address: '63 High Street, Newtownards',
    postcode: 'BT23 7HS',
    phone: '028 9181 9200',
    hours: 'Monday – Saturday 10am–4pm (closed Sunday)',
    donations: 'Mon–Fri 10am–4pm via the front door; Saturday 10am–1pm via the back door by the car park.',
    notes: 'Large items at the back door only, please.',
  },
];

export const sanctuary = {
  name: 'Assisi Animal Sanctuary',
  address: '1 Old Bangor Road',
  town: 'Conlig, Newtownards',
  postcode: 'BT23 7PU',
  phone: '028 9181 2622',
  email: 'info@assisi-ni.org',
  hours: 'Monday – Saturday: 12pm – 4pm',
  sunday: 'Sunday: Closed',
  charityNumber: 'NIC100079',
};

export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/AssisiAnimalSanctuary/',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/assisianimalsanctuary/',
  },
  {
    name: 'X',
    href: 'https://twitter.com/AssisiSanctuary',
  },
];
