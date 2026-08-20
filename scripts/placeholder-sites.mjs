// Wegwerpscript: genereert tijdelijke screenshots voor SiteStack zolang de
// echte klantafbeeldingen er nog niet zijn. Verwijderen zodra die geleverd zijn.
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const W = 1200;
const H = 750;

const sites = [
  { file: "kora.webp", label: "Kora", bg: "#dfe6ef", fg: "#8b96a6" },
  { file: "kyma.webp", label: "KYMA", bg: "#e4e7dc", fg: "#949c86" },
  { file: "mugen.webp", label: "Mugen", bg: "#e6e3e0", fg: "#9d958e" },
  { file: "vantage.webp", label: "Vantage", bg: "#e0e2e8", fg: "#91959f" },
];

await mkdir(new URL("../src/assets/sites/", import.meta.url), {
  recursive: true,
});

for (const { file, label, bg, fg } of sites) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="${W}" height="${H}" fill="${bg}"/>
    <rect x="0" y="0" width="${W}" height="64" fill="${fg}" opacity=".22"/>
    <circle cx="40" cy="32" r="9" fill="${fg}" opacity=".5"/>
    <circle cx="70" cy="32" r="9" fill="${fg}" opacity=".5"/>
    <circle cx="100" cy="32" r="9" fill="${fg}" opacity=".5"/>
    <rect x="150" y="20" width="420" height="24" rx="12" fill="${fg}" opacity=".3"/>
    <text x="${W / 2}" y="${H / 2 + 24}" font-family="Helvetica,Arial,sans-serif"
      font-size="84" font-weight="700" fill="${fg}" text-anchor="middle">${label}</text>
    <text x="${W / 2}" y="${H / 2 + 84}" font-family="Helvetica,Arial,sans-serif"
      font-size="28" fill="${fg}" text-anchor="middle" opacity=".8">placeholder</text>
  </svg>`;

  await sharp(Buffer.from(svg))
    .webp({ quality: 82 })
    .toFile(new URL(`../src/assets/sites/${file}`, import.meta.url).pathname);
}

console.log(`${sites.length} placeholders geschreven naar src/assets/sites/`);
