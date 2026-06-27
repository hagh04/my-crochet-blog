import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

const site =
  process.env.SITE_URL || process.env.PUBLIC_SITE_URL || 'https://softcrochet.com';

export default defineConfig({
  site,
  output: 'server',
  adapter: vercel(),

  integrations: [markdoc(), mdx(), react(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['lodash/debounce', '@keystatic/core'],
    },
  },
});