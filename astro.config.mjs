import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://conotoium.github.io',
  base: 'Portfolio',
  security: {
		checkOrigin: true
	},
  integrations: [vue(), react(), sitemap(), tailwind()]
});