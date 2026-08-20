# Storm — projectspec

Bron van waarheid voor deze site. Lees dit voordat je code schrijft.
Wijk hier niet van af zonder overleg.

---

## Het bedrijf

Storm bouwt websites op abonnementsbasis (vanaf €120/mnd) die
technisch gebouwd zijn om gevonden te worden — door Google én door AI-modellen.
Add-ons breiden dat fundament uit naar actieve groei.

**Merkbelofte:** wij publiceren onze cijfers. Rankings, verkeer, leads,
AI-vermeldingen. Van klanten én van onszelf.

De site is zelf het belangrijkste bewijsstuk. Alles hier moet voldoen aan de
standaard die we verkopen.

### Harde regel: geen verzonnen cijfers

Nooit een resultaat, klantnaam of metriek op de site die niet klopt. Als een
cijfer ontbreekt, tonen we de case zonder cijfer (zie `type: "project"`) of we
tonen hem niet. Dit is geen stijlvoorkeur maar de kern van de propositie.

---

## Stack

- Astro, laatste stable (7.x per augustus 2026 — controleer voor je begint)
- Node ≥ 22.12.0
- TypeScript strict
- Content Layer API: `src/content.config.ts` met `glob()` / `file()` loader
- Deploy: Vercel, static output tenzij een pagina server-rendering nodig heeft
- Geen React/Vue/Tailwind. Scoped CSS per component. Doel: 0 KB client-JS op
  contentpagina's.

**Verouderde patronen — niet gebruiken:**

| Fout | Goed | Waarom |
|---|---|---|
| `Astro.glob()` | `getCollection()` of `import.meta.glob()` | verwijderd in v6 |
| `<ViewTransitions />` | `<ClientRouter />` | hernoemd, event-timing gewijzigd |
| `src/content/config.ts` | `src/content.config.ts` | verplaatst in v5 |

---

## Branding

Donkerblauw met limegroen accent. Secties wisselen tussen donker en licht —
dat ritme draagt het ontwerp, houd de volgorde aan.

### Tokens

Staan in `src/styles/tokens.css`, geïmporteerd in `BaseLayout.astro`.
Nooit opnieuw definiëren in een component.

```css
--navy:      #082a3c;   /* donkere secties, primaire knop op licht */
--navy-card: #0d3549;   /* kaarten op donkere achtergrond */
--navy-line: rgba(255,255,255,.12);
--lime:      #c7f86e;   /* accent: primaire CTA, cijfers, vinkjes */
--paper:     #f4f7f8;   /* lichte tussensecties */
--ink:       #0b0f12;   /* tekst op licht */
--body:      #545d66;   /* lopende tekst op licht */
--dim:       #93a8b5;   /* bijschriften */
--line:      #e4e8ea;   /* randen op licht */
--max:       1180px;
```

### Typografie

Geist (Google Fonts, 400/500/600), fallback `system-ui`.
Koppen: `font-weight: 500`, `letter-spacing: -0.03em`, `line-height: 1.05`.

- h1 `clamp(2.5rem, 5.6vw, 4.2rem)`
- h2 `clamp(1.9rem, 3.8vw, 3rem)`
- h3 `1.15rem` / weight 600

### Vormtaal

- Knoppen: `border-radius: 10px`, padding `13px 24px`
- Kaarten: `border-radius: 20px`
- Footerkaart: `border-radius: 24px`
- Badges en pills: `border-radius: 999px`
- Logo: lime blokje 26px, `border-radius: 8px 2px 8px 2px`
- Accentkleur spaarzaam: primaire CTA, cijfers in resultaatkaarten, vinkjes,
  focus-ring. Niet als vlak.

### Sectieritme

```
1  nav + hero            navy
2  twee kaarten          navy (zelfde blok)
3  waarom wij              paper
4  statement             wit, dot-grid
5  cases                 wit
6  pijlers               wit
7  prijzen               navy
8  faq                   wit
9  slot-cta              navy
10 footer                witte kaart op navy
```

---

## URL-structuur

Ligt vast. Wijzigen achteraf kost maanden.

```
/                        homepage
/abonnement/             het €120-product, prijzen, voorwaarden
/diensten/[slug]/        add-ons, elk een eigen commerciële pagina
/branches/[slug]/        website voor recruitment, fotografie, zorg, ...
/cases/                  overzicht
/cases/[slug]/           losse case
/kennisbank/             overzicht
/kennisbank/[slug]/      artikel
/dashboard/              publieke eigen cijfers
/over/
/contact/
```

`trailingSlash: 'always'` in `astro.config.mjs`.

Stadspagina's alleen waar een echte klant zit — nu Nijmegen, Arnhem en
Utrecht. Patroon `/branches/[branche]-[stad]/`. Nog niet bouwen.

---

## Contentmodel

Alles wat schaalt is data. De mens vult de data, de template rendert.

### `cases` — `src/content/cases/*.md`

```ts
{
  klant: string
  branche: string
  plaats: string
  probleem: string
  aanpak: string
  resultaten: { metriek, voor, na, periode }[]   // min 1
  quote?: { tekst, naam, functie }
  type: "resultaat" | "project"                  // default "project"
  gepubliceerd: boolean                          // default false
}
```

**`type` bepaalt de weergave:**

- `"resultaat"` — uitkomstcijfers bekend. Navy kaart, lime voor→na cijfers.
  Nu: Legal Talents, Paul Breuker Fotografie.
- `"project"` — nog geen uitkomstcijfers. Witte kaart, geen cijferblok, wel
  wat er gebouwd is. Nu: Hugo AI, Finance Talents, NSO Eques, Zorgcoöperatie.

Zodra de cijfers van een klant binnen zijn: `type` omzetten naar `"resultaat"`
en `resultaten` aanvullen. Verder verandert er niets.

### `branches` — `src/content/branches/*.json`

```ts
{
  naam, slug, h1, intro: string
  pijnpunten: string[]          // min 3, uit echte gesprekken
  zoektermen_klant: string[]
  leadwaarde: string
  case_slug?: string
  faqs: { vraag, antwoord }[]   // min 3
  gepubliceerd: boolean         // default false
}
```

### `diensten` — `src/content/diensten/*.json`

```ts
{
  naam, slug, prijs: string
  terugkerend: boolean
  wat_je_krijgt: string[]
  voor_wie: string
  faqs: { vraag, antwoord }[]   // min 3
}
```

### `kennisbank` — `src/content/kennisbank/*.md`

```ts
{
  titel, beschrijving, hoofdvraag: string
  deelvragen: string[]          // sub-queries die een AI-model zou stellen
  gepubliceerd: date
  bijgewerkt: date              // zichtbaar tonen
  gerelateerd?: string[]
}
```

### `landing` — `src/content/landing/*.json`

Stadspagina's (`/website-laten-maken-nijmegen/`, …). Layout:
`src/pages/[slug].astro`. Referentie-implementatie: Nijmegen.

**Nieuwe pagina:** kopieer `src/templates/landing-stad.json` →
`src/content/landing/website-laten-maken-{{stad}}.json`, vul in,
`gepubliceerd: true` pas na uniqueness budget.

```ts
{
  h1, titel, beschrijving, intro, zoekterm: string
  probleem: { kop, tekst }[]                     // min 3
  vergelijking_kop: string                       // bijv. "Een lokaal bureau"
  vergelijking: { wat, zij, wij }[]              // min 4
  wanneer_niet_kop?, wanneer_niet?: string
  proces: { kop, tekst }[]                       // 3–4
  case_intro: string                             // lede onder "En zo pakt het uit."
  case_slugs: string[]                           // 1–2 case-ids, max 2 getoond
  lokale_context?: string                        // optioneel, nu niet gerenderd
  faqs: { vraag, antwoord }[]                    // min 5
  gerelateerd: string[]                          // max 2 landing-slugs
  gepubliceerd: boolean                          // default false
}
```

**Sectievolgorde (niet wijzigen zonder overleg):**

```
1  hero                 navy, gecentreerd + TrustRating
2  herken je dit        sky, 3 kolommen
3  bewijs               BewijsSectie
4  vier vlakken         KernwaardenSectie
5  aanpak               wit, proces uit data
6  cases                max 2, knop Meer projecten → /#cases
7  vergelijking         navy, Storm-kolom uitgelicht
8  wanneer niet         optioneel
9  prijzen              PrijzenSectie
10 faq                  navy, homepage-opmaak
11 slot + gerelateerd   navy
```

Zie ook `src/templates/README.md`.

### Uniqueness budget

Geen gegenereerde pagina gaat live zonder drie unieke elementen: een echte
case of klantnaam, branchespecifieke cijfers, en drie FAQ's uit echte
verkoopgesprekken. Afgedwongen via Zod `.min(3)` — de build faalt bij te weinig
input. Maximaal 8 nieuwe commerciële pagina's per week.

---

## Prijzen (staan overal zichtbaar op de site)

| | |
|---|---|
| Website Abonnement | €120/mnd + €395 setup, 12 mnd minimum |
| Eenmalig kopen | €3.150 |
| Afkoop bij opzeggen | €1.750 (na 12 maanden) |
| Extra landingspagina's | €15,50/mnd |
| Lokale vindbaarheid | €10/mnd |
| AI-zichtbaarheid | €10,50/mnd |
| Content | €100/mnd |

Inbegrepen: site op maat, hosting, domein, structured data, laadtijd < 1s,
30 min wijzigingen per maand, maandelijkse rapportage.

Niet inbegrepen — noem dit expliciet op de site: content schrijven, webshops,
klantportalen, ongelimiteerde wijzigingen, garantie op posities.

---

## SEO- en GEO-eisen

Elke pagina:

- [ ] Eén `<h1>`, logische kopstructuur
- [ ] Unieke `title` (~60 tekens) en `meta description` (~155)
- [ ] Absolute canonical
- [ ] `<html lang="nl-NL">`
- [ ] Open Graph + Twitter card
- [ ] JSON-LD (zie onder)
- [ ] Antwoordstructuur: kop = de vraag, eerste 2-3 zinnen = zelfstandig
      leesbaar volledig antwoord, daarna pas nuance
- [ ] Minimaal 2 interne links
- [ ] Zichtbare "laatst bijgewerkt"-datum op content

**JSON-LD:** `Organization` + `LocalBusiness` in de layout (met `sameAs`),
`Service` op diensten en abonnement, `FAQPage` waar FAQ's staan, `Article` in
de kennisbank, `BreadcrumbList` overal.

FAQ-schema wordt gegenereerd uit dezelfde array als de zichtbare tekst, zodat
ze nooit uit elkaar lopen.

**Technisch:** `@astrojs/sitemap`; robots.txt laat GPTBot, ClaudeBot,
PerplexityBot, Google-Extended en Bingbot expliciet toe; `astro:assets` voor
beeld met expliciete afmetingen; `security.csp: true`; Core Web Vitals groen op
mobiel; prijzen in platte tekst zodat modellen ze kunnen extraheren.

---

## Copy

Nederlands, je-vorm. Concreet boven clever, getallen boven bijvoeglijke
naamwoorden. Prijzen altijd zichtbaar. Elk bezwaar krijgt een eigen kop, niet
weggestopt in een FAQ.

Verboden: resultaatgericht, op maat, passie, ontzorgen, totaaloplossing.

---

## Nog niet bouwen

| Wat | Wanneer wel |
|---|---|
| Stadspagina's | als er meerdere klanten per stad zijn |
| Clipping | nooit op dit domein — aparte business |
| Blog met nieuwsberichten | nooit, kennisbank volstaat |
| CMS-koppeling | boven ~50 pagina's |
| Zoekfunctie (Pagefind) | boven 40 kennisbankartikelen |

---

## Definition of done, per pagina

1. Lighthouse mobiel: performance ≥95, accessibility 100, SEO 100
2. Alle SEO-checks afgevinkt
3. Uniqueness budget gehaald
4. Geen horizontale overflow op 360px
5. Alles bereikbaar met tab, zichtbare focus-ring in lime
6. `prefers-reduced-motion` schakelt alle transitions uit
7. Opgenomen in sitemap, minimaal 2 interne links ernaartoe
8. Geen enkel cijfer op de pagina dat niet klopt
