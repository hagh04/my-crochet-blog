import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

const site =
  process.env.SITE_URL || process.env.PUBLIC_SITE_URL || 'https://my-crochet-blog.pages.dev';

// Only load Keystatic locally — it can't build on Cloudflare
const integrations = [markdoc(), mdx(), react()];

if (!process.env.CF_PAGES && !process.env.CLOUDFLARE_ACCOUNT_ID) {
  const keystatic = (await import('@keystatic/astro')).default;
  integrations.push(keystatic());
}

export default defineConfig({
  site,
  output: 'static',
  adapter: cloudflare(),

  integrations,

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@keystatic/core', '@keystatic/astro'],
    },
  },
});