import { defineCollection, z } from 'astro:content';

const baseBlogSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.date(),
  author: z.string().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const companyBlogCollection = defineCollection({
  type: 'content',
  schema: baseBlogSchema,
});

const technicalBlogCollection = defineCollection({
  type: 'content',
  schema: baseBlogSchema,
});

export const collections = {
  'blog-company': companyBlogCollection,
  'blog-technical': technicalBlogCollection,
}; 