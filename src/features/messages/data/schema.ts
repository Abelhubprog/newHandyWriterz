import { z } from "zod"

export const messageSchema = z.object({
  id: z.string(),
  senderName: z.string(),
  senderEmail: z.string().email(),
  subject: z.string(),
  snippet: z.string(),
  status: z.enum(["read", "unread", "archived"]),
  receivedAt: z.date(),
})

export type Message = z.infer<typeof messageSchema>
