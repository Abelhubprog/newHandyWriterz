import { z } from "zod"

export const commentSchema = z.object({
  id: z.string(),
  authorName: z.string(),
  authorEmail: z.string().email(),
  authorAvatar: z.string().url(),
  content: z.string(),
  postTitle: z.string(),
  postId: z.string(),
  status: z.enum(["approved", "pending", "spam"]),
  createdAt: z.date(),
})

export type Comment = z.infer<typeof commentSchema>
