// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import previewPages from './src/lib/preview-pages.mjs';

// fika.pm — static site, deployed to Cloudflare Pages (build: `npm run build`, output: `dist`).
// Pages in src/preview-pages/ (About, the /dev test pages) are built on preview links only.
export default defineConfig({
  site: 'https://fika.pm',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [previewPages()],
  // The four fonts, fetched from Google Fonts at build time and served from the site itself.
  // Astro generates size-matched fallbacks, so text doesn't jump when the real fonts arrive.
  fonts: [
    { provider: fontProviders.google(), name: 'Instrument Serif', cssVariable: '--font-serif', weights: [400], styles: ['normal', 'italic'], subsets: ['latin'], fallbacks: ['Georgia', 'serif'] },
    { provider: fontProviders.google(), name: 'Public Sans', cssVariable: '--font-sans', weights: [400, 500, 600, 700], styles: ['normal'], subsets: ['latin'], fallbacks: ['Arial', 'sans-serif'] },
    { provider: fontProviders.google(), name: 'IBM Plex Mono', cssVariable: '--font-mono', weights: [500], styles: ['normal'], subsets: ['latin'], fallbacks: ['monospace'] },
    { provider: fontProviders.google(), name: 'Bungee', cssVariable: '--font-wordmark', weights: [400], styles: ['normal'], subsets: ['latin'], fallbacks: ['Arial', 'sans-serif'] },
  ],
});
