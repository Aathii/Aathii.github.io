// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Served from the user-site repo Aathii/Aathii.github.io. Swap for a custom domain later
// (drives canonical URLs, the sitemap and the social-card image URLs).
const site = 'https://aathii.github.io';

export default defineConfig({
  site,
  // The preview tool hands the dev server a free port through PORT.
  server: { port: Number(process.env.PORT) || 4322 },
  // The whole stylesheet is small; inlining it removes two render-blocking requests.
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
