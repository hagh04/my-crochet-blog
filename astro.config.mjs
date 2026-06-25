import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

const site =
  process.env.SITE_URL || process.env.PUBLIC_SITE_URL || 'https://my-crochet-blog.pages.dev';

export default defineConfig({
  site,

  // hybrid = static pages + server routes for Keystatic API
  output: 'hybrid',
  adapter: cloudflare(),

  integrations: [markdoc(), mdx(), react(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['lodash/debounce', '@keystatic/core'],
    },
  },
});