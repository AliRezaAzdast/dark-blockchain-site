import { z } from "zod";

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.string(),
  author: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
  }),
});

export const careersSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.string(),
  remote: z.boolean(),
  type: z.string(),
});

export const collections = {
  blog: blogSchema,
  careers: careersSchema,
};
