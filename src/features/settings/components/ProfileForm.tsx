"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormField, FormItem, Label as FormLabel, FormMessage, FormControl, FormDescription } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "react-hot-toast"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can be set to a default value or fetched from a user object.
const defaultValues: Partial<ProfileFormValues> = {
  bio: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  })

  function onSubmit(data: ProfileFormValues) {
    toast(
      (
        <div>
          <div className="font-medium">You submitted the following values:</div>
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        </div>
      ),
      { duration: 5000 }
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField name="username">
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...form.register("username")} />
            </FormControl>
            <FormDescription>
              This is your public display name. It can be your real name or a
              pseudonym. You can only change this once every 30 days.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="your.email@example.com" {...form.register("email")} />
            <FormDescription>
              You can manage verified email addresses in your email settings.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField name="bio">
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Input placeholder="Tell us a little bit about yourself" {...form.register("bio")} />
            </FormControl>
            <FormDescription>
              You can <span>@mention</span> other users and organizations to
              link to them.
            </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}
