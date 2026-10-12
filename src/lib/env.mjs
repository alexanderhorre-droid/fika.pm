// Where is this build going?
// Cloudflare Pages sets CF_PAGES_BRANCH. The main branch is the live site (fika-pm.pages.dev, later fika.pm);
// every other branch is a preview link. Local builds count as previews.
export const isLiveBuild = process.env.CF_PAGES_BRANCH === 'main';
export const isPreviewBuild = !isLiveBuild;
