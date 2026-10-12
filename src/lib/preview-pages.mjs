// Pages that exist ONLY on preview links, never on the live site.
// They live in src/preview-pages/ (not src/pages/) and are added to the build by this integration
// when the build is a preview. On the main branch they are simply not built, so their URLs 404.
//
// To publish one (e.g. once About is approved): move it into src/pages/ and link it.
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isPreviewBuild } from './env.mjs';

const DIR = fileURLToPath(new URL('../preview-pages/', import.meta.url));

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : name.endsWith('.astro') ? [full] : [];
  });
}

export default function previewPages() {
  return {
    name: 'fika-preview-pages',
    hooks: {
      'astro:config:setup': ({ injectRoute, logger }) => {
        if (!isPreviewBuild) { logger.info('Live build: preview-only pages left out.'); return; }
        for (const file of walk(DIR)) {
          const route = '/' + relative(DIR, file).replace(/\\/g, '/').replace(/\.astro$/, '').replace(/(^|\/)index$/, '');
          injectRoute({ pattern: route, entrypoint: file });
        }
        logger.info('Preview build: preview-only pages included.');
      },
    },
  };
}
