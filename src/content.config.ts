import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const faqSchema = z.object({
  vraag: z.string(),
  antwoord: z.string(),
});

const branches = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/branches" }),
  schema: z.object({
    naam: z.string(),
    h1: z.string(),
    intro: z.string(),
    pijnpunten: z.array(z.string()).min(3),
    zoektermen_klant: z.array(z.string()),
    leadwaarde: z.string(),
    case_slug: z.string().optional(),
    faqs: z.array(faqSchema).min(3),
    gepubliceerd: z.boolean().default(false),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
  schema: z.object({
    klant: z.string(),
    branche: z.string(),
    plaats: z.string(),
    url: z.string().url(),
    probleem: z.string(),
    aanpak: z.string(),
    resultaten: z.array(z.object({
      metriek: z.string(),
      voor: z.string(),
      na: z.string(),
      periode: z.string(),
    })).optional(),
    quote: z.object({
      tekst: z.string(),
      naam: z.string(),
      functie: z.string(),
    }).optional(),
    type: z.enum(["resultaat", "project"]).default("project"),
    gepubliceerd: z.boolean().default(false),
  }),
});

const diensten = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/diensten" }),
  schema: z.object({
    naam: z.string(),
    slug: z.string(),
    prijs: z.string(),
    terugkerend: z.boolean(),
    wat_je_krijgt: z.array(z.string()),
    voor_wie: z.string(),
    faqs: z.array(faqSchema).min(3),
  }),
});

const juridisch = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/juridisch" }),
  schema: z.object({
    titel: z.string(),
    beschrijving: z.string(),
    bijgewerkt: z.coerce.date(),
  }),
});

const landing = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/landing" }),
  schema: z.object({
    h1: z.string(),
    titel: z.string(), // SEO title, max 60 tekens
    beschrijving: z.string(), // meta description, max 155
    intro: z.string(),
    zoekterm: z.string(),
    stad: z.string().optional(),
    vindbaarheid_keyword: z.string().optional(),
    probleem: z.array(z.object({
      kop: z.string(),
      tekst: z.string(),
    })).min(3).max(4),
    vergelijking: z.array(z.object({
      wat: z.string(),
      zij: z.string(),
      wij: z.string(),
    })).min(4),
    vergelijking_kop: z.string(), // bijv. "Squarespace" of "Zelf bouwen"
    wanneer_niet_kop: z.string().optional(),
    wanneer_niet: z.string().optional(),
    proces: z.array(z.object({
      kop: z.string(),
      tekst: z.string(),
    })).min(3).max(4),
    case_intro: z.string(),
    case_slugs: z.array(z.string()).min(1).max(2),
    extra_kop: z.string().optional(),
    extra_tekst: z.string().optional(),
    overnemen: z.array(z.string()).min(4).optional(),
    faqs: z.array(faqSchema).min(5),
    gerelateerd: z.array(z.string()).max(2), // slugs van andere landingspagina's
    gepubliceerd: z.boolean().default(false),
  }),
});

export const collections = { branches, cases, diensten, juridisch, landing };
