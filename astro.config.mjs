// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: "https://neqst.nl",
  trailingSlash: "always",
  adapter: vercel(),
  redirects: {
    "/abonnement/": { status: 301, destination: "/prijzen/" },
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/contact/bedankt") && !page.includes("/abonnement"),
    }),
  ],
  build: {
    // Astro splitst CSS per pagina, dus die blijft klein genoeg om te inlinen.
    // Scheelt een render-blocking request. Heroverwegen als een pagina ooit
    // meer dan ~10 kB CSS krijgt.
    inlineStylesheets: "always",
  },
});