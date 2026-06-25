import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";


import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

const site =
  process.env.SITE_URL || process.env.PUBLIC_SITE_URL || "https://quietpages-eta.vercel.app";

export default defineConfig({
  site,
  integrations: [mdx(), react(), keystatic()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['lodash/debounce', '@keystatic/core'],
    },
  },
});