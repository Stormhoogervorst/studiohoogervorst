import { getCollection, type CollectionEntry } from "astro:content";

export type KennisbankArtikel = CollectionEntry<"kennisbank">;

export const CATEGORIE_LABELS = {
  seo: "SEO",
  ai: "AI",
  website: "Website",
  kosten: "Kosten",
} as const;

export type KennisbankCategorie = keyof typeof CATEGORIE_LABELS;

export const CATEGORIE_FILTERS = [
  { id: "all", label: "Alles" },
  { id: "seo", label: "SEO" },
  { id: "ai", label: "AI" },
  { id: "website", label: "Website" },
  { id: "kosten", label: "Kosten" },
] as const;

export function formatDatum(date: Date): string {
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function isoDatum(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function artikelPad(id: string): string {
  return `/kennisbank/${id}/`;
}

export async function getGepubliceerdeArtikelen(): Promise<KennisbankArtikel[]> {
  const artikelen = await getCollection("kennisbank", ({ data }) => !data.concept);
  return artikelen.sort(
    (a, b) => b.data.bijgewerkt.valueOf() - a.data.bijgewerkt.valueOf(),
  );
}

export function gerelateerdeArtikelen(
  huidig: KennisbankArtikel,
  alle: KennisbankArtikel[],
): KennisbankArtikel[] {
  const overig = alle.filter((artikel) => artikel.id !== huidig.id);
  const gekozen = huidig.data.gerelateerd;

  if (gekozen?.length) {
    const byId = new Map(overig.map((artikel) => [artikel.id, artikel]));
    const gevonden = gekozen
      .map((id) => byId.get(id))
      .filter((artikel): artikel is KennisbankArtikel => Boolean(artikel));

    if (gevonden.length > 0) return gevonden.slice(0, 3);
  }

  return overig.slice(0, 3);
}
