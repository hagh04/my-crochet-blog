import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
    generateId: ({ entry }) => entry.replace(/[\\/]index\.mdx$/, "").replace(/\.(md|mdx)$/, "").replace(/\\/g, "/"),
  }),
  schema: () =>
    z.object({
      title: z.string(),
      type: z.enum(["article", "roundup"]).default("article"),
      excerpt: z.string().default(""),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      readingTime: z.number().int().positive(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      author: z.string().default("hamza"),
      thumbnail: z.string(),
      imageCredit: z
        .object({
          caption: z.string().optional(),
          author: z.string(),
          authorUrl: z.string().url(),
          source: z.string().default("Unsplash"),
          sourceUrl: z.string().url(),
        })
        .optional(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog };
