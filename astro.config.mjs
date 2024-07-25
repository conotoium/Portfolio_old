import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4322/Portfolio',
  base: 'Portfolio',
  security: {
    checkOrigin: true
  },
  integrations: [vue(), react(), sitemap(), tailwind(), robotsTxt()],
  output: "server",
  adapter: vercel()
});