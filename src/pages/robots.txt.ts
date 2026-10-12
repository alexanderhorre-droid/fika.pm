// robots.txt: the live site welcomes search engines; preview links ask them to stay away.
import type { APIContext } from 'astro';
import { isLiveBuild } from '../lib/env.mjs';

export function GET(context: APIContext) {
  const body = isLiveBuild
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', context.site)}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
