// RSS feed of published lessons, newest first: /rss.xml
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getLessons, topicLabel } from '../lib/lessons';

export async function GET(context: APIContext) {
  const lessons = await getLessons();
  return rss({
    title: 'fika.pm · Product Lessons',
    description: 'Bite‑sized product lessons for PMs. Read one on a coffee break and use it the same day.',
    site: context.site!,
    items: lessons.map((l) => ({
      title: l.data.title,
      description: `${l.data.deck} The Take Away: ${l.data.takeaway.title}.`,
      pubDate: l.data.date,
      link: `/lessons/${l.id}`,
      categories: l.data.topics.map(topicLabel),
    })),
    customData: '<language>en</language>',
    trailingSlash: false,
  });
}
