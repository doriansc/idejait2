export const site = {
  name: 'IDEJA IT',
  url: 'https://ideja-it.hr',
  phone: '+385918840345',
  phoneDisplay: '091 884 0345',
  email: 'info@ideja-it.hr',
  whatsapp: 'https://wa.me/385918840345',
  street: 'Zagrebačka 11',
  postalCode: '10410',
  city: 'Velika Gorica',
  owner: 'Dorian Šutić',
  legalName: 'IDEJA, vl. Dorian Šutić',
};

export const nav = [
  { href: '/#usluge', label: 'Usluge' },
  { href: '/#slucajevi', label: 'Slučajevi' },
  { href: '/samoprocjena/', label: 'Samoprocjena' },
  { href: '/blog/', label: 'Blog' },
];

export const mailto = (subject = 'Upit za IT podršku') =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export const businessSchema = {
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://ideja-it.hr/#business',
  name: 'IDEJA IT',
  alternateName: 'IDEJA IT podrška',
  url: 'https://ideja-it.hr/',
  telephone: site.phone,
  email: site.email,
  image: 'https://ideja-it.hr/images/og-image.jpg',
  logo: 'https://ideja-it.hr/assets/logo-ideja-it.svg',
  description:
    'IT podrška za tvrtke u Zagrebu i okolici. Održavanje IT sustava, servera, mreža, Microsoft 365 administracija, backup, sigurnosni audit i automatizacija za knjigovodstvene urede.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: 'Zagrebačka županija',
    postalCode: site.postalCode,
    addressCountry: 'HR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.7133, longitude: 16.0726 },
  areaServed: [
    { '@type': 'City', name: 'Zagreb' },
    { '@type': 'City', name: 'Velika Gorica' },
    { '@type': 'Country', name: 'Hrvatska' },
  ],
  sameAs: ['https://wa.me/385918840345', 'https://servis-racunala-zg.com/'],
};
