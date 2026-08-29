---
titel: "Wat is een sitemap en heb je er een nodig?"
beschrijving: "Een sitemap vertelt zoekmachines welke pagina's je hebt. Wat het is, hoe je controleert of je er een hebt, en wanneer het echt uitmaakt."
hoofdvraag: "Wat is een sitemap en heb ik er een nodig?"
deelvragen:
  - "Wat doet een sitemap precies?"
  - "Hoe controleer ik of ik er een heb?"
  - "Moet ik hem ergens indienen?"
  - "Wat als pagina's niet in Google staan?"
categorie: "website"
gepubliceerd: 2026-09-09
bijgewerkt: 2026-09-09
gerelateerd:
  - "website-geen-bezoekers"
  - "wat-is-structured-data"
concept: false
---

Een sitemap is een bestand op je website met daarin een lijst van al je
pagina's. Zoekmachines en AI-crawlers gebruiken hem om te zien wat er allemaal
te vinden is, zonder dat ze je hele site hoeven af te struinen.

Het is een van die dingen die je één keer goed zet en daarna vergeet — mits ze
goed staan.

## Wat het oplost

Een crawler vindt je pagina's normaal gesproken door links te volgen. Staat er
ergens een pagina waar niet naar gelinkt wordt, of ligt hij vier klikken diep,
dan kan het lang duren voordat hij gevonden wordt. Soms gebeurt het nooit.

Een sitemap slaat dat over. Hij zegt: dit zijn al mijn pagina's, en dit is
wanneer ze voor het laatst zijn gewijzigd.

Dat laatste is belangrijker dan het lijkt. Werk je een pagina bij, dan ziet een
crawler via de sitemap dat er iets veranderd is en komt hij sneller langs.

## Hoe je controleert of je er een hebt

Typ je domein in met `/sitemap.xml` erachter. Werkt dat niet, probeer dan
`/sitemap_index.xml` of `/sitemap-index.xml`.

Je krijgt een pagina met een lijst van adressen. Ziet er rommelig uit, dat
hoort zo — het is bedoeld voor machines, niet voor mensen.

Krijg je een foutmelding, dan heb je er waarschijnlijk geen. Bij de meeste
systemen wordt hij automatisch gegenereerd zodra je de juiste instelling
aanzet.

## Dien hem in bij Google

Een sitemap hebben is stap één. Google vertellen dat hij bestaat is stap twee,
en die wordt vaak vergeten.

Ga naar Google Search Console, voeg je site toe als je dat nog niet hebt gedaan,
en dien onder "Sitemaps" het adres van je sitemap in. Je ziet daarna hoeveel
pagina's Google gevonden heeft en hoeveel er daadwerkelijk geïndexeerd zijn.

Dat verschil is vaak leerzaam. Vindt Google veertig pagina's maar zijn er
twaalf geïndexeerd, dan is er iets aan de hand met die andere achtentwintig.

Zet het adres van je sitemap ook onderaan je `robots.txt`. Dan vinden andere
crawlers, waaronder de AI-crawlers, hem ook. Of jouw `robots.txt` die crawlers
toelaat, controleer je in
[Blokkeert jouw website ChatGPT?](/kennisbank/blokkeert-je-website-chatgpt/).

## Wanneer het echt uitmaakt

Voor een site van vijf pagina's met een duidelijk menu: nauwelijks. Google
vindt die pagina's ook zonder.

Het wordt relevant bij:

- sites met meer dan een stuk of twintig pagina's
- nieuwe sites, waar nog geen enkele link naartoe wijst
- sites waar regelmatig pagina's bijkomen
- pagina's die diep in de structuur liggen

Voor een site die groeit, is het dus wel degelijk de moeite.

## Wat een sitemap niet doet

Drie misverstanden die hardnekkig zijn.

**Hij zorgt niet voor hogere posities.** Een sitemap helpt bij vinden, niet bij
beoordelen.

**Hij garandeert geen indexering.** Google bepaalt zelf of een pagina de moeite
waard is. Staat er een pagina in je sitemap die niet geïndexeerd wordt, dan is
dat meestal een oordeel over de pagina, niet een technisch probleem.

**Hij repareert een slechte structuur niet.** Als belangrijke pagina's alleen
via de sitemap te vinden zijn en niet via je menu, klopt er iets anders niet.

## Wat er vaak misgaat

De sitemap staat er wel, maar er staan pagina's in die op noindex staan. Dan
geef je twee tegenstrijdige signalen: kom hier kijken, maar neem het niet op.

Of de sitemap wordt niet bijgewerkt als er pagina's bijkomen. Bij een handmatig
gemaakte sitemap gebeurt dat structureel — daarom hoort hij automatisch
gegenereerd te worden.

## Bij ons staat dit automatisch goed

Onze sites genereren de sitemap bij elke build opnieuw, dus hij loopt altijd
mee met wat er daadwerkelijk op de site staat. Het adres staat in de
`robots.txt` zodat ook AI-crawlers hem vinden.

Staan er pagina's van jou niet in Google terwijl je wel een sitemap hebt, dan
zit het probleem waarschijnlijk elders. Vijf mogelijke oorzaken staan in
[Waarom je website geen bezoekers krijgt](/kennisbank/website-geen-bezoekers/).
