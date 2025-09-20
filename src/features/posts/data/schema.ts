import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  author: z.string(),
  domain: z.string(),
  status: z.string(),
  publishedAt: z.date(),
})

export type Post = z.infer<typeof postSchema>
