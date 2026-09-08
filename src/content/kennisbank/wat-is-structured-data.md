---
titel: "Wat is structured data en waarom is het nu belangrijker geworden?"
beschrijving: "Structured data vertelt zoekmachines en AI-modellen letterlijk wat er op je pagina staat. Wat het is, welke types je nodig hebt, en hoe je controleert of het klopt."
hoofdvraag: "Wat is structured data en heb je het nodig?"
deelvragen:
  - "Wat doet structured data precies?"
  - "Welke types heb ik nodig voor mijn bedrijf?"
  - "Levert het hogere posities op?"
  - "Hoe controleer ik of het goed staat?"
categorie: "ai"
gepubliceerd: 2026-08-26
bijgewerkt: 2026-08-26
gerelateerd:
  - "wat-is-geo"
  - "waarom-ai-andere-bronnen-citeert"
concept: false
---

Structured data is een stukje code op je pagina dat in machineleesbare vorm
herhaalt wat er in gewone tekst al staat. Dat je een bedrijf bent, wat je doet,
waar je zit, wat iets kost.

Het is jarenlang gezien als een technisch detail voor gevorderden. Sinds
AI-modellen bronnen ophalen en samenvatten, is het aanzienlijk belangrijker
geworden. Wat dat betekent voor hoe je genoemd wordt, staat in
[Wat is GEO en moet je er nu iets mee?](/kennisbank/wat-is-geo/).

## Wat het oplost

Een zoekmachine leest je pagina en moet raden. Is "Storm Sites" een
bedrijfsnaam of een productcategorie? Is "€120" een prijs, een korting of een
willekeurig getal? Is "Nijmegen" waar je gevestigd bent of waar je klant zit?

Structured data haalt het raden eruit. In plaats van een machine te laten
interpreteren, vertel je het letterlijk: dit is een bedrijf, dit is de naam,
dit is het adres, dit is de prijs van deze dienst.

## Waarom het nu meer uitmaakt

Bij Google was structured data vooral goed voor de opmaak van je zoekresultaat:
sterretjes bij een review, een prijs onder je link, een uitklapbare FAQ.

Bij AI-modellen ligt het anders. Die moeten in korte tijd bepalen wat een
pagina zegt en of het bruikbaar is als antwoord. Een pagina die expliciet
aangeeft wat voor entiteit erop staat en wat de feiten zijn, is makkelijker te
verwerken dan een pagina waar dat uit de lopende tekst moet komen.

Het is geen garantie dat je genoemd wordt — het is een randvoorwaarde.

## Welke types je nodig hebt

Voor een normaal MKB-bedrijf zijn dit de relevante:

**Organization of LocalBusiness.** Wie je bent, waar je zit, hoe je bereikbaar
bent. Hoort op elke pagina te staan, meestal in de layout. Het `sameAs`-veld
is hierbij het belangrijkst: daarmee koppel je je site aan je LinkedIn, je
Google Bedrijfsprofiel en je KvK-vermelding. Zo weet een machine dat het
allemaal hetzelfde bedrijf is.

**Service.** Per dienst die je aanbiedt: wat het is, voor wie, en wat het kost.
Dit is waar je prijs machineleesbaar wordt.

**FAQPage.** Waar je veelgestelde vragen staan. Let op: de vragen en antwoorden
in de code moeten exact overeenkomen met wat er zichtbaar op de pagina staat.

**Article.** Voor kennisbankartikelen en blogs, met publicatie- en
wijzigingsdatum.

**BreadcrumbList.** Waar deze pagina zit in de structuur van je site.

## Levert het hogere posities op?

Niet direct. Structured data is geen rankingfactor in de zin dat je erdoor
stijgt.

Wat het wel doet: je zoekresultaat opvallender maken, waardoor er vaker op
geklikt wordt. En je pagina begrijpelijker maken voor systemen die moeten
kiezen welke bron ze citeren. Waarom die keuze vaak niet de Google-top is,
staat in
[Waarom AI-modellen andere bronnen citeren dan Google toont](/kennisbank/waarom-ai-andere-bronnen-citeert/).

Wie je vertelt dat structured data je naar positie één brengt, verkoopt je iets
anders dan hij denkt.

## Hoe je controleert of het klopt

Google heeft een gratis test: zoek op "Rich Results Test", plak je adres erin.
Je ziet wat er gevonden wordt en welke fouten erin zitten.

Twee dingen om op te letten. Waarschuwingen zijn geen fouten — je hoeft niet
elk optioneel veld in te vullen. En de meest voorkomende echte fout is
inconsistentie: een adres in de code dat afwijkt van het adres op de pagina, of
FAQ-vragen die niet meer overeenkomen met de tekst nadat iemand de pagina heeft
aangepast.

## De valkuil bij handmatig onderhoud

Structured data die niet meeloopt met je content is erger dan geen structured
data. Verander je een prijs op de pagina en niet in de code, dan geef je twee
verschillende antwoorden en weet een machine niet welke klopt.

Daarom genereren wij ons FAQ-schema uit dezelfde bron als de zichtbare tekst.
En plek aanpassen, en beide lopen mee. Dat soort keuzes maak je bij de bouw,
niet achteraf.

## Wat er bij ons standaard in zit

Organization, LocalBusiness, Service, FAQPage, Article en BreadcrumbList, op
elke pagina waar ze horen, gegenereerd uit de content zelf. Geen los product en
geen meerprijs — zie [de abonnementspagina](/prijzen/).
