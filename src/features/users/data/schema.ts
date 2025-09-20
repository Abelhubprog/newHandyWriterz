import { z } from "zod"

// We're keeping all the attributes flat for the demo
export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(["admin", "editor", "viewer"]),
  status: z.enum(["active", "inactive", "pending"]),
  createdAt: z.date(),
  lastLogin: z.date(),
  avatar: z.string().url(),
})

export type User = z.infer<typeof userSchema>
