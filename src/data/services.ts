import legacy from './legacy-services.json';

export type Card = { h: string; p?: string; items?: string[] };
export type Service = {
  slug: string;
  title: string;
  description: string;
  serviceName: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  lead: string;
  bullets: string[];
  sections: { label?: string | null; h2: string; intro?: string | null; cards: Card[] }[];
  faqHeading?: string;
  faq: { q: string; a: string }[];
  ctaH: string;
  ctaP: string;
  isNew?: boolean;
  // Home page tile
  tile: { name: string; line: string; spec: string[]; size: 'hero' | 'wide' | 'small' };
  related: string[];
};

const tiles: Record<string, Pick<Service, 'tile' | 'related'>> = {
  'microsoft-365-administracija-zagreb': {
    tile: {
      name: 'Microsoft 365',
      line: 'Pošta, Teams i SharePoint koji rade, s prijavama zaštićenima od napada na lozinke.',
      spec: ['Migracija pošte s hostinga i starih servera na Exchange Online', 'MFA, Conditional Access i blokada zastarjelih protokola', 'Licence, dijeljeni sandučići, arhiviranje i prava pristupa'],
      size: 'hero',
    },
    related: ['sigurnosni-audit', 'backup-i-sigurnost-podataka-zagreb', 'it-podrska-za-tvrtke-zagreb'],
  },
  'it-podrska-za-tvrtke-zagreb': {
    tile: {
      name: 'Vanjski IT odjel',
      line: 'Jedna adresa za korisnike, računala, servere, mrežu i dobavljače, uz mjesečno održavanje.',
      spec: ['Podrška zaposlenicima', 'Plan zamjene opreme i licenci'],
      size: 'wide',
    },
    related: ['it-podrska-zagreb', 'odrzavanje-servera-zagreb', 'microsoft-365-administracija-zagreb'],
  },
  'sigurnosni-audit': {
    tile: {
      name: 'Sigurnosni audit',
      line: 'Pregled prema ISO/IEC 27001 i provjera Microsoft 365 okruženja, s nalazima po prioritetu.',
      spec: [],
      size: 'small',
    },
    related: ['microsoft-365-administracija-zagreb', 'backup-i-sigurnost-podataka-zagreb', 'konfiguracija-mreza-zagreb'],
  },
  'backup-i-sigurnost-podataka-zagreb': {
    tile: {
      name: 'Backup i oporavak',
      line: 'Backup koji se redovito testira i plan što raditi kad disk, server ili račun stane.',
      spec: [],
      size: 'small',
    },
    related: ['sigurnosni-audit', 'odrzavanje-servera-zagreb', 'microsoft-365-administracija-zagreb'],
  },
  'automatizacija-knjigovodstva': {
    tile: {
      name: 'Automatizacija za knjigovodstvo',
      line: 'Uvoz bankovnih izvoda, obrada ulaznih računa i izvještaji iz Synesisa i Pantheona, bez prepisivanja.',
      spec: ['Prijedlog kontiranja uz provjeru knjigovođe', 'Kartice, otvorene stavke i aging u Excelu'],
      size: 'wide',
    },
    related: ['it-podrska-za-tvrtke-zagreb', 'backup-i-sigurnost-podataka-zagreb', 'sigurnosni-audit'],
  },
  'odrzavanje-servera-zagreb': {
    tile: {
      name: 'Serveri',
      line: 'Windows Server, Active Directory, Hyper-V i terminal serveri pod redovitim nadzorom.',
      spec: [],
      size: 'small',
    },
    related: ['backup-i-sigurnost-podataka-zagreb', 'it-podrska-za-tvrtke-zagreb', 'konfiguracija-mreza-zagreb'],
  },
  'konfiguracija-mreza-zagreb': {
    tile: {
      name: 'Mreže',
      line: 'LAN, WiFi, VLAN, VPN i firewall za urede, poslovnice i rad od kuće.',
      spec: [],
      size: 'small',
    },
    related: ['odrzavanje-servera-zagreb', 'sigurnosni-audit', 'it-podrska-za-tvrtke-zagreb'],
  },
  'it-podrska-zagreb': {
    tile: { name: 'IT podrška po pozivu', line: '', spec: [], size: 'wide' },
    related: ['it-podrska-za-tvrtke-zagreb', 'microsoft-365-administracija-zagreb', 'backup-i-sigurnost-podataka-zagreb'],
  },
};

const newServices: Omit<Service, 'tile' | 'related'>[] = [
  {
    slug: 'automatizacija-knjigovodstva',
    isNew: true,
    title: 'Automatizacija knjigovodstva | Synesis, Pantheon, bankovni izvodi | IDEJA IT',
    description:
      'Automatizacija za knjigovodstvene urede: uvoz bankovnih izvoda, prijedlog kontiranja, obrada ulaznih računa i izvještaji iz Synesis i Pantheon baza.',
    serviceName: 'Automatizacija za knjigovodstvene urede',
    breadcrumb: 'Automatizacija knjigovodstva',
    eyebrow: 'Synesis, Pantheon, bankovni izvodi i eRačun',
    h1: 'Automatizacija za knjigovodstvene urede',
    lead: 'Bankovni izvodi, ulazni računi i ponavljajuća knjiženja troše sate koje knjigovođa može potrošiti na provjeru i savjetovanje klijenata. Povezujemo knjigovodstveni program s podacima koje ured već ima i automatiziramo poslove koji se svaki mjesec rade na isti način.',
    bullets: ['Uvoz bankovnih izvoda i prijedlog kontiranja', 'Obrada PDF i skeniranih ulaznih računa', 'Izvještaji iz Synesis i Pantheon baza'],
    sections: [
      {
        label: 'Što uključuje usluga',
        h2: 'Poslovi koje najčešće automatiziramo',
        cards: [
          {
            h: 'Što najčešće radimo',
            items: [
              'Uvoz bankovnih izvoda u knjigovodstveni program',
              'Pravila kontiranja po partneru, IBAN-u i opisu plaćanja',
              'Prijedlog kontiranja za stavke koje pravila ne pokrivaju, uz obaveznu provjeru',
              'Čitanje PDF i skeniranih računa u strukturirane podatke',
              'Kartice partnera, otvorene stavke i aging izvještaji u Excelu',
              'Power Query izvještaji nad Pantheon SQL bazom',
            ],
          },
        ],
      },
      {
        label: 'Kontrola ostaje u uredu',
        h2: 'Automatika priprema, knjigovođa odlučuje',
        intro:
          'Cilj nije da program knjiži umjesto knjigovođe, nego da knjigovođa ne prepisuje. Stavke u koje automatika nije sigurna označavaju se za provjeru, a svako knjiženje ostaje vidljivo i ispravljivo u programu koji ured već koristi.',
        cards: [
          {
            h: 'Kako izgleda uvođenje',
            p: 'Počinjemo s jednim procesom i jednom knjigom, najčešće bankovnim izvodima. Pravila podešavamo na stvarnim podacima iz prošlih mjeseci, rezultat uspoređujemo s ručnim knjiženjem i tek onda prelazimo na tekući rad.',
          },
          {
            h: 'Znate gdje su podaci',
            p: 'Prije početka dogovaramo gdje se obrada izvodi i koji podaci izlaze iz ureda. Pristup bazama ograničen je na ono što proces treba, a promjene se zapisuju tako da se uvijek zna što je napravila automatika.',
          },
        ],
      },
    ],
    faqHeading: 'Pitanja koja najčešće dobivamo',
    faq: [
      { q: 'S kojim knjigovodstvenim programima radite?', a: 'Najviše sa Synesisom i Pantheonom. Za druge programe mogućnosti uvoza i pristupa podacima procjenjujemo nakon pregleda.' },
      { q: 'Hoće li automatika knjižiti bez provjere?', a: 'Ne. Stavke koje pravila jednoznačno prepoznaju pripremaju se za knjiženje, a sve ostalo označava se za ručnu provjeru. Zadnju riječ uvijek ima knjigovođa.' },
      { q: 'Moramo li mijenjati program?', a: 'Ne. Automatizacija se spaja na program koji već koristite, preko njegovih uvoznih formata ili baze podataka.' },
      { q: 'Koliko traje uvođenje?', a: 'Prvi proces uvodimo na jednoj knjizi i stvarnim podacima iz prošlih mjeseci. Rok dogovaramo nakon pregleda, jer ovisi o programu, banci i broju knjiga.' },
    ],
    ctaH: 'Koji posao u uredu ponavljate svaki mjesec?',
    ctaP: 'Opišite proces i program koji koristite, a mi ćemo procijeniti što se može automatizirati i kako bi izgledao prvi korak.',
  },
  {
    slug: 'sigurnosni-audit',
    isNew: true,
    title: 'Sigurnosni audit IT sustava | Microsoft 365, ISO/IEC 27001, NIS2 | IDEJA IT',
    description:
      'Sigurnosni audit za tvrtke u Zagrebu: provjera Microsoft 365 i Entra ID postavki, pregled prema ISO/IEC 27001:2022 i priprema za NIS2 i sigurnosne upitnike kupaca.',
    serviceName: 'Sigurnosni audit IT sustava',
    breadcrumb: 'Sigurnosni audit',
    eyebrow: 'ISO/IEC 27001, Microsoft 365 i NIS2',
    h1: 'Sigurnosni audit IT sustava',
    lead: 'Neovisan pregled onoga kako je vaš sustav stvarno postavljen: tko se i kako prijavljuje, što je izloženo internetu, radi li backup i koje kontrole postoje samo na papiru. Rezultat je izvještaj s prioritetima, ne popis od stotinu općenitih preporuka.',
    bullets: ['Microsoft 365 i Entra ID sigurnosna provjera', 'Pregled prema ISO/IEC 27001:2022', 'Priprema za NIS2 i upitnike kupaca'],
    sections: [
      {
        label: 'Što uključuje usluga',
        h2: 'Što provjeravamo',
        cards: [
          {
            h: 'Što najčešće radimo',
            items: [
              'Analiza logova prijava i neuspjelih pokušaja prijave',
              'MFA, Conditional Access i zastarjeli protokoli prijave',
              'Administratorske uloge, dijeljeni i napušteni računi',
              'Servisi izloženi internetu: RDP, VPN, web i mail serveri',
              'Backup, oporavak i stvarni test restorea',
              'Odgovori na sigurnosne upitnike kupaca i partnera',
            ],
          },
        ],
      },
      {
        label: 'Rezultat',
        h2: 'Izvještaj s prioritetima, ne generički popis',
        intro:
          'Svaki nalaz ima procjenu rizika, konkretan korak za ispravak i procjenu napora. Kritične stvari, poput pristupa bez MFA-a ili napada koji je u tijeku, javljamo odmah, a ne na kraju audita.',
        cards: [
          {
            h: 'Kako teče audit',
            p: 'Uvodni razgovor i dogovor opsega, pristup samo za čitanje, prikupljanje konfiguracija i logova, analiza te prezentacija nalaza. Promjene u sustavu ne radimo bez vašeg odobrenja.',
          },
          {
            h: 'Tko radi audit',
            p: 'Audit vodi ISO/IEC 27001:2022 Lead Auditor (TÜV NORD) s praktičnim iskustvom administracije Microsoft 365, Windows Server i mrežnih sustava. Zato su nalazi provjerljivi i provedivi.',
          },
        ],
      },
    ],
    faqHeading: 'Pitanja koja najčešće dobivamo',
    faq: [
      { q: 'Dobivamo li ISO 27001 certifikat?', a: 'Ne. Certifikat izdaje akreditirano certifikacijsko tijelo. Mi radimo pregled prema zahtjevima norme i pomažemo s pripremom, ali certifikat ne izdajemo.' },
      { q: 'Treba li vam administratorski pristup?', a: 'Za većinu provjera dovoljna je uloga samo za čitanje, poput Global Reader u Microsoft 365. Točan opseg pristupa dogovaramo prije početka.' },
      { q: 'Odnosi li se NIS2 na našu tvrtku?', a: 'Ovisi o sektoru i veličini, a obveze nastaju tek kada vas nadležno tijelo kategorizira. I kada niste obveznik, kupci koji to jesu mogu tražiti sigurnosne mjere od vas kao dobavljača.' },
      { q: 'Koliko traje audit?', a: 'Ovisi o opsegu. Provjera Microsoft 365 okruženja je najkraći oblik, a opseg i rok šireg pregleda dogovaramo nakon uvodnog razgovora.' },
    ],
    ctaH: 'Želite znati gdje je vaš sustav ranjiv?',
    ctaP: 'Javite nam veličinu tvrtke i sustave koje koristite, a mi ćemo predložiti opseg provjere. Ako niste sigurni odakle krenuti, riješite samoprocjenu.',
  },
];

const all = [...(legacy as Omit<Service, 'tile' | 'related'>[]), ...newServices];

export const services: Service[] = all.map((s) => ({ ...s, ...tiles[s.slug] }));

export const bySlug = (slug: string) => services.find((s) => s.slug === slug)!;

// Order on the home bento grid
export const bentoOrder = [
  'microsoft-365-administracija-zagreb',
  'it-podrska-za-tvrtke-zagreb',
  'sigurnosni-audit',
  'backup-i-sigurnost-podataka-zagreb',
  'automatizacija-knjigovodstva',
  'odrzavanje-servera-zagreb',
  'konfiguracija-mreza-zagreb',
];
