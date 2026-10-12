// Lessons: one Markdown file per lesson in src/content/lessons/. The file name is the URL slug.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const TOPICS = ['roadmap', 'framework', 'retention', 'onboarding', 'payments', 'claude'] as const;

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string().min(1),
    deck: z.string().min(1),
    date: z.coerce.date(),
    topics: z.array(z.enum(TOPICS)).min(1),
    takeaway: z.object({ title: z.string().min(1), text: z.string().min(1) }),
    receipts: z.array(z.object({ title: z.string(), author: z.string(), url: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { lessons };
