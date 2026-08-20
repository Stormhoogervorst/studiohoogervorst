# Templates

## Landingspagina stad — `landing-stad.json`

Bron: de live pagina `/website-laten-maken-nijmegen/`.
Layout: `src/pages/[slug].astro`. Data: `src/content/landing/*.json`.

### Nieuwe stadspagina maken

1. Kopieer `landing-stad.json` naar
   `src/content/landing/website-laten-maken-{{stad}}.json`
   (slug = bestandsnaam zonder `.json`).
2. Vervang alle `{{STAD}}` / `{{stad}}` door de echte plaatsnaam.
3. Schrijf lokale `probleem`-punten, FAQ's en `case_slugs` (echte cases).
4. Vul `gerelateerd` met max. 2 andere landing-slugs.
5. Zet `gepubliceerd: true` pas als uniqueness budget en SEO-checks kloppen
   (zie `PROJECT.md`).

### Sectievolgorde (vast)

1. Hero — gecentreerd, TrustRating, knoppen naar contact/abonnement
2. Herken je dit? — 3 probleemkolommen + knop Plan kennismaking
3. Bewijs — ChatGPT-kaart + citaat (gedeeld component)
4. Vier vlakken — KernwaardenSectie (gedeeld)
5. Zo pakken we het aan — `proces` uit data
6. En zo pakt het uit — max. 2 cases via `case_slugs` + `case_intro`
7. Vergelijking — tabel `vergelijking_kop` vs Storm Sites
8. Optioneel: wanneer niet (`wanneer_niet_kop` / `wanneer_niet`)
9. Prijzen — PrijzenSectie
10. FAQ — navy opmaak, `faqs` (min. 5)
11. Slot-CTA + gerelateerde links
