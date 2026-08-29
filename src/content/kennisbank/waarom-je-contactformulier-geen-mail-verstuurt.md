---
titel: "Waarom je contactformulier geen mail meer verstuurt"
beschrijving: "Een formulier dat stilletjes stopt met werken kost je aanvragen zonder dat je het merkt. De vier meest voorkomende oorzaken en hoe je het test."
hoofdvraag: "Waarom komen berichten van mijn contactformulier niet aan?"
deelvragen:
  - "Hoe test ik of mijn formulier werkt?"
  - "Waarom komt de mail in de spam terecht?"
  - "Wat is SPF en DKIM?"
  - "Hoe merk ik het als het weer stukgaat?"
categorie: "website"
gepubliceerd: 2026-09-11
bijgewerkt: 2026-09-11
gerelateerd:
  - "domeinnaam-kwijt"
  - "wat-kost-website-onderhoud"
concept: false
---

Van alle dingen die stilletjes stukgaan op een website is dit de duurste: een
contactformulier dat wel verstuurt maar waarvan de mail nergens aankomt.

De bezoeker ziet "bedankt voor je bericht" en denkt dat hij iets van je hoort.
Jij hoort niets en denkt dat er geen aanvragen zijn. Dit kan maanden doorlopen.

## Test het nu even

Vul je eigen formulier in met een echt adres en kijk of de mail binnenkomt.
Kijk ook in je spammap.

Doe dit met een adres van een andere provider dan waar je eigen mail op draait
— dus als jij Gmail gebruikt, test dan ook met een Outlook-adres. Mail die bij
de ene provider aankomt kan bij de andere in de spam belanden.

Zet dit daarna in je agenda, één keer per kwartaal. Het kost je twee minuten en
het is de goedkoopste verzekering die er is.

## De vier oorzaken

**1. Het afzendadres klopt niet.**

De meest voorkomende. Je formulier verstuurt mail namens jouwbedrijf.nl, maar
de server die het verstuurt heeft daar geen toestemming voor. Mailproviders zijn
de laatste jaren streng geworden op dit punt en gooien zulke mail weg of in de
spam.

De oplossing zit in drie instellingen bij je domein: SPF, DKIM en DMARC. Die
vertellen ontvangende servers welke partijen namens jouw domein mogen versturen.
Klinkt technisch, maar het is eenmalig instellen bij je domeinbeheerder of
hostingpartij.

**2. De ontvanger is veranderd zonder dat het formulier is aangepast.**

Het formulier stuurt naar het adres van iemand die er niet meer werkt, of naar
een adres dat is opgeheven. De mail bounced, maar de bounce gaat naar een adres
dat ook niemand leest.

**3. Een update heeft iets gebroken.**

Bij systemen met losse onderdelen gebeurt dit regelmatig: een update van het
ene onderdeel verandert iets waar het formulier op leunde. Niemand merkt het,
want er komt geen foutmelding — de bezoeker krijgt gewoon de bedanktpagina.

Dit is precies waarom technisch onderhoud geen luxe is. Meer daarover in
[Wat kost het onderhoud van een website?](/kennisbank/wat-kost-website-onderhoud/).

**4. De spamfilter is te streng afgesteld.**

Sommige formulieren blokkeren berichten met bepaalde woorden, met links erin,
of met een IP-adres uit een verkeerd land. Een klant die netjes een link naar
zijn eigen site meestuurt, wordt weggegooid als spam.

## Hoe je het permanent oplost

Drie dingen die het probleem structureel wegnemen.

**Verstuur via een echte maildienst.** In plaats van de mailfunctie van je
eigen server — die is bijna altijd de zwakke schakel — verstuur je via een
dienst die daarvoor gemaakt is. Die zorgt dat de authenticatie klopt en houdt
bij of berichten aankomen.

**Sla de inzending ook ergens op.** Als de mail verdwijnt, heb je het bericht
dan nog steeds. Een simpele opslag naast de mail is de beste verzekering tegen
verloren aanvragen.

**Zet een melding op stilte.** Krijg je normaal drie aanvragen per week en is
het twee weken stil, dan wil je dat weten. Dat kan zo simpel als een notitie in
je maandelijkse controle.

## Wat je nooit moet doen

Een formulier maken dat alleen een "mailto:"-link is. Dan opent het
mailprogramma van de bezoeker, en op mobiel is dat vaak niet ingesteld. Je
verliest daarmee een flink deel van je aanvragen.

## Hoe wij het doen

Onze formulieren versturen via een aparte maildienst met kloppende
authenticatie, en er zit een verborgen veld in dat bots eruit filtert zonder
dat echte bezoekers er iets van merken. Bij de maandelijkse controle hoort ook
een test van het formulier.

Dat klinkt als een detail, maar het is een van de weinige dingen op een website
waar één storing direct omzet kost. Wat er verder in het onderhoud zit staat op
[de abonnementspagina](/abonnement/).
