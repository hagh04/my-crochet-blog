import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // The Magic Cloudflare Engine:
  output: 'hybrid',
  adapter: cloudflare(),

  // Your Integrations:
  integrations: [markdoc()],

  // The Vite/Tailwind Fixes:
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['lodash/debounce', '@keystatic/core'],
    },
  },
});