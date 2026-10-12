// @ts-check
import { defineConfig } from 'astro/config';
import previewPages from './src/lib/preview-pages.mjs';

// fika.pm — static site, deployed to Cloudflare Pages (build: `npm run build`, output: `dist`).
// Pages in src/preview-pages/ (About, the /dev test pages) are built on preview links only.
export default defineConfig({
  site: 'https://fika.pm',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [previewPages()],
});
