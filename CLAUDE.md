# ideja-it.hr — upute za rad na repou

Stranica IDEJA IT (Dorian Šutić), Astro + Cloudflare Pages. Sadržaj je na hrvatskom.

## Grane

- `main` je ŽIVA stranica (GitHub Pages, stara statična verzija). Ne mijenjati i ne spajati ništa u `main` bez izričitog Dorianovog odobrenja.
- `redesign-astro` je nova verzija. Rad ide na zasebnu granu i PR prema `redesign-astro`.

## Prije svakog PR-a

```bash
npm run build && npm test && npm run test:unit
```

Svi testovi moraju proći. `npm run check:launch` smije padati dok Dorian ne upiše podatke označene žutom `todo` klasom (OIB, IBAN, rokovi) — te podatke nikad ne izmišljati.

## Dizajn (ne mijenjati bez dogovora)

- Tokeni su u `src/styles/global.css`. Tamni `--night` za prikaz rada sustava, svijetli `--paper` za sadržaj.
- `--signal` (crvena) = incident i brand, `--ok` (zelena) = riješeno. Nikad kao ukras.
- Mona Sans za naslove, brojke i logo; Geist za tekst; Geist Mono samo za strojni ispis. Fontovi su lokalni (fontsource), bez Google Fonts.
- CSP u `public/_headers` dopušta samo skripte s vlastite domene: bez inline skripti, bez vanjskih CDN-ova.

## Sadržaj

- Pravne i regulatorne tvrdnje (NIS2, fiskalizacija, GDPR) samo uz provjeru u izvornom tekstu propisa (narodne-novine.nn.hr) i s linkom u odjeljku „Izvori”.
- Slučajevi u `src/data/cases.ts` su anonimizirani stvarni slučajevi; ne dodavati izmišljene.
- Novi blog članak = nova `.md` datoteka u `src/content/blog/` s istim frontmatterom.
