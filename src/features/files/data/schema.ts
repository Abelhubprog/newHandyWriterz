import { z } from "zod"

export const fileSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(["image", "document", "video", "audio", "archive", "other"]),
  size: z.number(),
  uploader: z.string(),
  status: z.enum(["available", "archived", "deleted"]),
  createdAt: z.date(),
  url: z.string().url(),
})

export type File = z.infer<typeof fileSchema>
