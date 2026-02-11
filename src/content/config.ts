import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        author: z.string().default('Gion Stegmann'),
        tags: z.array(z.string()).optional(),
        heroImage: image().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'projects': defineCollection({
        schema: ({ image }) => z.object({
            title: z.string(),
            description: z.string(),
            tags: z.array(z.string()).optional(),
            link: z.string().optional(),
            github: z.string().optional(),
            instagram: z.string().optional(),
            heroImage: image().optional(),
        }),
    }),
};
