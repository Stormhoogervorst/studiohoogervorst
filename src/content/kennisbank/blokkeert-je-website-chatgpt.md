---
titel: "Blokkeert jouw website ChatGPT? Zo controleer je het in twee minuten"
beschrijving: "Veel Nederlandse sites houden AI-crawlers buiten zonder dat de eigenaar het weet. In twee minuten weet je of dat bij jou ook zo is — en hoe je het oplost."
hoofdvraag: "Hoe controleer je of je website AI-crawlers blokkeert?"
deelvragen:
  - "Welke AI-crawlers zijn er en hoe heten ze?"
  - "Waar staat het als je site ze blokkeert?"
  - "Waarom zou je ze juist wel toelaten?"
  - "Zijn er redenen om ze te blokkeren?"
categorie: "ai"
gepubliceerd: 2026-08-06
bijgewerkt: 2026-08-06
gerelateerd:
  - "opdracht-via-chatgpt"
  - "wat-is-geo"
concept: false
---

Er is een instelling op je website die bepaalt of ChatGPT je bedrijf ooit kan
noemen. De meeste ondernemers weten niet dat hij bestaat, en bij een flink
deel van de Nederlandse sites staat hij verkeerd.

Het gaat om een tekstbestand dat `robots.txt` heet. Daarin staat welke
geautomatiseerde bezoekers je site mogen bekijken.

## De controle, stap voor stap

Typ je eigen domein in de adresbalk en zet er `/robots.txt` achter. Dus
bijvoorbeeld `jouwbedrijf.nl/robots.txt`.

Je krijgt een pagina met platte tekst. Zoek daarin naar deze namen:

- `GPTBot` — de crawler van OpenAI, achter ChatGPT
- `ClaudeBot` — van Anthropic
- `PerplexityBot` — van Perplexity
- `Google-Extended` — bepaalt of Google je content voor Gemini mag gebruiken

Staat achter zo'n naam de regel `Disallow: /`, dan houd je die crawler volledig
buiten. Staat er `Allow: /`, of komt de naam helemaal niet voor terwijl er
bovenaan `User-agent: *` met `Allow: /` staat, dan mag hij binnen.

Krijg je een foutmelding en bestaat het bestand niet? Dan is er niets
geblokkeerd. Dat is op zichzelf niet erg, maar het betekent ook dat er niemand
over nagedacht heeft.

## Hoe die blokkade er komt zonder dat je het weet

Vrijwel nooit door een bewuste keuze. De drie meest voorkomende oorzaken:

Een SEO-plugin met een instelling die "AI-training blokkeren" heet. Klinkt
verstandig, maar het gevolg is dat je ook niet meer aanbevolen kunt worden.

Een hostingpartij die het standaard aanzet, meestal met een verwijzing naar
privacy of bandbreedte.

Of iemand die ooit een lijstje van internet heeft gekopieerd zonder te kijken
wat erin stond.

## Waarom je ze zou willen toelaten

Als een AI-assistent een vraag krijgt over jouw vakgebied, zoekt hij op dat
moment het web af. Kan hij jouw site niet ophalen, dan besta je in dat gesprek
simpelweg niet — hoe goed je site verder ook is.

Wij hebben van dichtbij gezien wat dat waard kan zijn: een van onze klanten
kreeg een opdracht binnen van iemand die hen via ChatGPT had gevonden. Dat
verhaal staat in
[Onze klant kreeg een opdracht via ChatGPT](/kennisbank/opdracht-via-chatgpt/).

## En als je ze wél wilt blokkeren?

Die keuze bestaat en is soms verdedigbaar. Publiceer je originele research die
je liever niet in een trainingsset ziet belanden, of zit je in een sector waar
je content je product is, dan is blokkeren een reële afweging.

Voor het overgrote deel van de MKB-sites geldt dat niet. Jouw dienstpagina's
zijn geen intellectueel eigendom dat beschermd moet worden — het zijn
verkoopteksten die juist gelezen moeten worden.

## Wat je in het bestand zou moeten zetten

Een `robots.txt` die AI-crawlers expliciet toelaat ziet er ongeveer zo uit:
bovenaan een algemene regel die alles toestaat, daaronder de vier crawlers bij
naam met dezelfde toestemming, en onderaan een verwijzing naar je sitemap.

Die verwijzing is belangrijker dan hij lijkt: hij vertelt elke crawler waar hij
de volledige lijst met je pagina's kan vinden.

Weet je niet hoe je dit bestand aanpast, dan zit het meestal in je SEO-plugin
of bij je hostingpartij. Kom je er niet uit, dan is dat ook een teken over hoe
toegankelijk je huidige opzet is.

## Bij ons staat dit standaard goed

Elke site die wij bouwen laat deze crawlers toe, met de sitemap erin verwezen.
Dat is geen apart product en er zit geen prijskaartje aan — het is een van de
dingen die gewoon goed horen te staan. Wat er verder standaard in zit staat op
[de abonnementspagina](/abonnement/).
