// @ts-check
import { defineConfig } from 'astro/config';

// fika.pm — static site, deployed to Cloudflare Pages (build: `npm run build`, output: `dist`).
export default defineConfig({
  site: 'https://fika.pm',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
});
