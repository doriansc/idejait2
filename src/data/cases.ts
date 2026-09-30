// Tipični slučajevi, anonimizirani. Prije objave provjeriti da opisi odgovaraju stvarnim intervencijama.
export type CaseReport = {
  id: string;
  title: string;
  client: string;
  area: string;
  serviceSlug: string;
  fields: { k: 'Simptom' | 'Dijagnoza' | 'Rješenje' | 'Rezultat'; v: string }[];
};

export const cases: CaseReport[] = [
  {
    id: 'm365-spray',
    title: 'Noćni napadi na lozinke preko zastarjelih protokola',
    client: 'Inženjerska tvrtka, Microsoft 365',
    area: 'Sigurnost identiteta',
    serviceSlug: 'sigurnosni-audit',
    fields: [
      { k: 'Simptom', v: 'Korisnici ujutro pronalaze zaključane račune, a u logovima su stotine neuspjelih prijava izvan radnog vremena.' },
      { k: 'Dijagnoza', v: 'Analiza logova prijava pokazala je raspoređeni napad na lozinke preko zastarjele autentikacije, koju MFA ne pokriva, s adresa izvan Hrvatske.' },
      { k: 'Rješenje', v: 'Conditional Access pravila koja blokiraju zastarjele protokole, MFA za sve račune i isključen SMTP AUTH tamo gdje nije potreban.' },
      { k: 'Rezultat', v: 'Pokušaji preko starih protokola odbijaju se prije provjere lozinke, a prijava je moguća samo modernom autentikacijom uz MFA.' },
    ],
  },
  {
    id: 'izvodi',
    title: 'Bankovni izvodi koji su se prepisivali ručno',
    client: 'Knjigovodstveni ured, Synesis',
    area: 'Automatizacija',
    serviceSlug: 'automatizacija-knjigovodstva',
    fields: [
      { k: 'Simptom', v: 'Svaki izvod za desetke knjiga upisuje se i kontira ručno, a kraj mjeseca znači prekovremeni rad.' },
      { k: 'Dijagnoza', v: 'Većina stavki ponavlja se svaki mjesec: isti partneri, isti IBAN-ovi, iste vrste plaćanja. Ručni rad potreban je tek za manji dio.' },
      { k: 'Rješenje', v: 'Automatski uvoz izvoda u knjigu, pravila kontiranja po partneru i opisu plaćanja te prijedlog za nepoznate stavke koje idu na provjeru.' },
      { k: 'Rezultat', v: 'Knjigovođa pregledava samo označene stavke umjesto da prepisuje cijeli izvod.' },
    ],
  },
  {
    id: 'mreza',
    title: 'Ured u kojem mreža pada kad se svi spoje',
    client: 'Ured s 25 zaposlenika na dva kata',
    area: 'Mreže',
    serviceSlug: 'konfiguracija-mreza-zagreb',
    fields: [
      { k: 'Simptom', v: 'Prekidi WiFi veze i spor pristup datotekama u jutarnjim satima, a video pozivi pucaju.' },
      { k: 'Dijagnoza', v: 'Pristupne točke na istim kanalima s previsokom snagom, gosti i kamere u istoj mreži kao računala, bez ikakve segmentacije.' },
      { k: 'Rješenje', v: 'Novi raspored kanala i snage, zasebni VLAN-ovi za goste, kamere i poslovna računala te pravila na firewallu između njih.' },
      { k: 'Rezultat', v: 'Stabilna veza na oba kata, a gosti i uređaji više ne dijele mrežu s poslovnim podacima.' },
    ],
  },
];
