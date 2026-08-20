export const HULP_OPTIES = [
  { value: "", label: "Kies..." },
  { value: "nieuwe-website", label: "Nieuwe website" },
  { value: "vervangen", label: "Bestaande site vervangen" },
  { value: "google", label: "Beter vindbaar worden in Google" },
  { value: "ai", label: "Gevonden worden door AI-modellen" },
  { value: "anders", label: "Iets anders" },
] as const;

export const CONTACT_LIMITS = {
  naam: 120,
  email: 254,
  bedrijf: 160,
  huidige_website: 500,
  hulp: 80,
  bericht: 5000,
} as const;

export type ContactField = keyof typeof CONTACT_LIMITS;

export type ContactInput = Record<ContactField, string> & {
  nieuwsbrief: boolean;
};

export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function hulpLabel(value: string): string {
  return HULP_OPTIES.find((optie) => optie.value === value)?.label ?? value;
}

export function validateContact(input: ContactInput): ContactErrors {
  const errors: ContactErrors = {};

  const naam = input.naam.trim();
  if (!naam) errors.naam = "Vul je naam in.";
  else if (naam.length > CONTACT_LIMITS.naam) errors.naam = "Dit veld is te lang.";

  const email = input.email.trim();
  if (!email) errors.email = "Vul je e-mailadres in.";
  else if (email.length > CONTACT_LIMITS.email || !EMAIL_RE.test(email)) {
    errors.email = "Vul een geldig e-mailadres in.";
  }

  const bedrijf = input.bedrijf.trim();
  if (!bedrijf) errors.bedrijf = "Vul je bedrijfsnaam in.";
  else if (bedrijf.length > CONTACT_LIMITS.bedrijf) {
    errors.bedrijf = "Dit veld is te lang.";
  }

  const site = input.huidige_website.trim();
  if (site) {
    if (site.length > CONTACT_LIMITS.huidige_website) {
      errors.huidige_website = "Dit veld is te lang.";
    } else {
      try {
        const url = new URL(site);
        if (url.protocol !== "http:" && url.protocol !== "https:") {
          errors.huidige_website =
            "Vul een geldige URL in, bijvoorbeeld https://voorbeeld.nl.";
        }
      } catch {
        errors.huidige_website =
          "Vul een geldige URL in, bijvoorbeeld https://voorbeeld.nl.";
      }
    }
  }

  if (input.hulp.length > CONTACT_LIMITS.hulp) {
    errors.hulp = "Dit veld is te lang.";
  }

  if (input.bericht.length > CONTACT_LIMITS.bericht) {
    errors.bericht = "Dit veld is te lang.";
  }

  return errors;
}
