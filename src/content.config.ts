// Lessons: one Markdown file per lesson in src/content/lessons/. The file name is the URL slug.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string().min(1),
    deck: z.string().min(1),
    date: z.coerce.date(),
    // Free-form: any topic a lesson lists becomes a filter chip and a topic tag. Case-insensitive.
    topics: z.array(z.string().trim().min(1)).min(1),
    takeaway: z.object({ title: z.string().min(1), text: z.string().min(1) }),
    receipts: z.array(z.object({ title: z.string(), author: z.string(), url: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { lessons };
