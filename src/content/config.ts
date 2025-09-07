import { defineCollection, z} from "astro:content";

const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().min(20),
        year: z.string().regex(/^\d{4}$/),
        tags: z.array(z.string()).default([]),
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
        featured: z.boolean().default(false),
        order: z.number().optional(),
    }),
});

export const collections = { projects };