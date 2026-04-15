import { z } from 'zod'

export const SignUpRequestSchema = z.object({
  email: z.email(),
})
export type SignUpRequest = z.infer<typeof SignUpRequestSchema>
