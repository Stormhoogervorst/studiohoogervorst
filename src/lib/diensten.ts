import { getCollection, type CollectionEntry } from "astro:content";

export type Dienst = CollectionEntry<"diensten">;

export function dienstPad(slug: string) {
  return `/diensten/${slug}/`;
}

/** "€10,50 p/m" → "€10,50 per maand" als de add-on terugkerend is. */
export function prijsLeesbaar(prijs: string, terugkerend: boolean) {
  const schoon = prijs.trim();
  const zonder = schoon.replace(/\s*p\/m\s*$/i, "").trim();
  if (terugkerend && zonder !== schoon) return `${zonder} per maand`;
  return schoon;
}

/** "€10,50" uit "€10,50 p/m", voor het grote cijfer op de pagina. */
export function prijsEuro(prijs: string) {
  const match = prijs.match(/€\s*[\d.]+(?:,\d{1,2})?/);
  return match ? match[0].replace(/\s+/g, "") : prijs.trim();
}

/** Numeriek bedrag voor JSON-LD. "€1.250,50" → 1250.5. */
export function prijsBedrag(prijs: string): number | undefined {
  const match = prijs.match(/€\s*(\d{1,3}(?:\.\d{3})*|\d+)(?:,(\d{1,2}))?/);
  if (!match) return undefined;
  const heel = Number(match[1].replace(/\./g, ""));
  const deel = match[2] ? Number(match[2].padEnd(2, "0")) / 100 : 0;
  if (!Number.isFinite(heel + deel)) return undefined;
  return heel + deel;
}

export function dienstTitel(naam: string, prijsTekst: string) {
  return `${naam}: ${prijsTekst} | Neqst`;
}

export function dienstBeschrijving(
  naam: string,
  prijsTekst: string,
  voorWie: string,
  terugkerend: boolean,
) {
  const ritme = terugkerend ? ", maandelijks te starten en te stoppen" : "";
  const metRitme = `${naam}: ${prijsTekst}${ritme}. ${voorWie}`;
  if (metRitme.length <= 155) return metRitme;
  const zonder = `${naam}: ${prijsTekst}. ${voorWie}`;
  if (zonder.length <= 160) return zonder;
  return voorWie;
}

export async function getDiensten() {
  const items = await getCollection("diensten");
  return items.sort((a, b) => {
    const pa = prijsBedrag(a.data.prijs) ?? Number.POSITIVE_INFINITY;
    const pb = prijsBedrag(b.data.prijs) ?? Number.POSITIVE_INFINITY;
    if (pa !== pb) return pa - pb;
    return a.data.naam.localeCompare(b.data.naam, "nl");
  });
}
