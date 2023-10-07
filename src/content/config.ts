// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      coverAlt: z.string(),
      theme: z.string().optional(),
    }),
});
const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      cover: image(),
      coverAlt: z.string(),
      theme: z.string().optional(),
      createdAt: z.date(),
      updatedAt: z.date(),
      url: z.string().optional(),
      repository: z.string().optional(),
      type: z.enum(["personal", "tutorial"]).default("personal"),
      tags: z.array(z.string()),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
