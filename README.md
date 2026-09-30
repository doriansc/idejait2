# ideja-it.hr v2 (Astro + Cloudflare Pages)

Nova verzija stranice ideja-it.hr. Statična stranica generirana Astrom, bez JavaScript frameworka na klijentu. Samo tri mala skripta: izbornik, prikaz prijave u heroju i kontakt obrazac (plus samoprocjena na svojoj stranici).

## Struktura

| Putanja | Sadržaj |
|---|---|
| `src/styles/global.css` | Dizajn tokeni (boje, tipografija, razmaci) i osnovni stilovi |
| `src/data/site.ts` | Kontakt podaci, navigacija, schema.org LocalBusiness |
| `src/data/services.ts` | Svih 8 usluga: sadržaj landing stranica, pločice na početnoj, povezane usluge |
| `src/data/legacy-services.json` | Sadržaj 6 postojećih stranica usluga, izvučen 1:1 iz stare verzije |
| `src/data/cases.ts` | Tipični slučajevi (incident report format) |
| `src/pages/[slug].astro` | Predložak stranice usluge, isti URL-ovi kao prije |
| `src/pages/samoprocjena.astro` | Sigurnosna samoprocjena (pitanja i preporuke su na vrhu datoteke) |
| `src/content/blog/*.md` | Članci. Novi članak = nova .md datoteka s istim frontmatterom |
| `functions/api/contact.js` | Cloudflare Pages Function za kontakt obrazac |
| `public/_headers` | Sigurnosni headeri (CSP, HSTS, …) |
| `public/_redirects` | Preusmjerenje stare `/sitemap.xml` |

## Lokalno

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # rezultat u dist/
```

Node 22+.

## Prije objave obavezno

- [ ] `src/pages/impressum.astro`: upisati OIB, obrtni registar / MBO i IBAN (ili ukloniti redak). Mjesta su označena žutom bojom.
- [ ] `src/pages/privatnost.astro`: potvrditi rok čuvanja upita (12 mjeseci je prijedlog) i odlučiti o Cloudflare Web Analytics.
- [ ] `src/data/cases.ts`: provjeriti da tri slučaja odgovaraju stvarnim intervencijama (anonimizirano).
- [ ] Hero primjer prijave (`src/components/TicketConsole.astro`) je ilustrativan i tako je i označen.
- [ ] Brojke na početnoj (12+, 100+, 500+) preuzete su sa stare stranice.
- [ ] Pročitati oba blog članka, posebno odlomak o kaznama u NIS2 članku (hrvatski iznosi nisu provjereni u tekstu zakona, samo u sekundarnim izvorima).

## Migracija s GitHub Pages na Cloudflare Pages

Stara stranica ostaje na grani `main` i GitHub Pages dok DNS ne prebaciš. Rollback je vraćanje DNS zapisa.

1. **Cloudflare Pages projekt**: Workers & Pages → Create → Pages → Connect to Git → `doriansc/idejait2`, grana `redesign-astro` (kasnije `main`).
   - Framework preset: Astro
   - Build command: `npm run build`
   - Output directory: `dist`
   - Environment variable: `NODE_VERSION = 22`
2. **Varijable za obrazac** (Settings → Variables and Secrets, kao Secret):
   - `CONTACT_WEBHOOK_URL`: URL Power Automate flowa „When an HTTP request is received” ili n8n Webhook noda. Flow šalje mail na info@ideja-it.hr s poljima `name`, `company`, `contact`, `urgency`, `message`, `subject`, `page`, `receivedAt`.
   - `CONTACT_WEBHOOK_KEY` (preporučeno): tajni niz koji flow provjerava u headeru `X-Contact-Key`.
   - `ALLOWED_ORIGIN` samo ako testiraš na drugoj domeni (npr. `https://redesign-astro.idejait2.pages.dev`).
3. **Pregled**: provjeri `*.pages.dev` adresu, pošalji probni upit kroz obrazac.
4. **Domena**: Custom domains → dodaj `ideja-it.hr` i `www.ideja-it.hr`. Ako je DNS već na Cloudflareu, zapisi se postave automatski. Ako nije, prebaci nameservere ili postavi CNAME prema uputama.
5. **Nakon prebacivanja**: u Google Search Console pošalji `https://ideja-it.hr/sitemap-index.xml`, provjeri headere na securityheaders.com, a na GitHubu isključi Pages za `idejait2` tek kad je sve stabilno.
6. **Spajanje u `main`**: kad je Cloudflare produkcija na `redesign-astro` stabilna, spoji granu u `main` i u Cloudflareu prebaci produkcijsku granu na `main`. GitHub Pages mora biti isključen prije spajanja, jer bi inače pokušao objaviti izvorni kod umjesto stranice.

## Dizajn ukratko

- Tamni „noćni” ton (`--night`) za dijelove koji prikazuju rad sustava, svijetli „papir” (`--paper`) za sadržaj koji se čita.
- Crvena (`--signal`) znači incident i brand, zelena (`--ok`) znači riješeno. Ne koriste se kao ukras.
- Pisma: Bricolage Grotesque za naslove, brojke i logo; Geist za tekst; Geist Mono samo za strojni ispis (vremena, statusi).
- Fontovi se poslužuju s vlastite domene, bez Google Fonts.
