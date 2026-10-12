// One place to read lessons. Enforces the house rules at build time:
//   - a lesson body is 500 words or fewer
//   - a lesson body is text only: no images
// Drafts appear on preview URLs (and locally) but never on the main branch, which becomes fika.pm.
import { getCollection, type CollectionEntry } from 'astro:content';
import { TOPICS } from '../content.config';

export type Lesson = CollectionEntry<'lessons'>;
export type Topic = (typeof TOPICS)[number];
export { TOPICS };

export const MAX_WORDS = 500;
export const showDrafts = process.env.CF_PAGES_BRANCH !== 'main';

export const TOPIC_LABELS: Record<Topic, string> = {
  roadmap: 'Roadmap', framework: 'Framework', retention: 'Retention',
  onboarding: 'Onboarding', payments: 'Payments', claude: 'Claude',
};

/** Words a reader actually reads: comments, code fences and Markdown syntax removed. */
export function countWords(markdown: string): number {
  const text = markdown
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_`~|-]+/g, ' ');
  return (text.match(/[\p{L}\p{N}][\p{L}\p{N}’'.,-]*/gu) ?? []).length;
}

const IMAGE = /!\[[^\]]*\]\([^)]*\)|<img\b|<picture\b|<svg\b|<figure\b/i;

function check(lesson: Lesson) {
  const body = lesson.body ?? '';
  const words = countWords(body);
  const file = `src/content/lessons/${lesson.id}.md`;
  if (words > MAX_WORDS) throw new Error(`${file}: body is ${words} words. Lessons are ${MAX_WORDS} words or fewer.`);
  if (IMAGE.test(body)) throw new Error(`${file}: body contains an image. Lessons are text only.`);
}

/** All publishable lessons, newest first. Every lesson (drafts included) is checked. */
export async function getLessons(): Promise<Lesson[]> {
  const all = await getCollection('lessons');
  all.forEach(check);
  return all
    .filter((l) => showDrafts || !l.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** "7 Oct 2026" — three-letter months everywhere (en-GB would print "Sept"). */
export const formatDate = (d: Date) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
