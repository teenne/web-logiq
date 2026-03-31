import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    type: z.enum(['forskning', 'teknikk', 'fagguide', 'foreldreressurs', 'eksamen', 'formelark', 'guide']).default('guide'),
    category: z.enum([
      'forskning', 'studieteknikk', 'fagguide', 'foreldre',
      'eksamen', 'nedlasting', 'statistikk', 'laereplan',
    ]).optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    draft: z.boolean().default(false),
    updated_at: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
    toc: z.boolean().default(true),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    draft: z.boolean().default(false),
    updated_at: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
  }),
});

export const collections = { articles, blog };
