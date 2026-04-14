import { z } from 'zod'

export const ForgotPasswordRequestSchema = z.object({
  email: z.email(),
})

export type ForgotPasswordRequest = z.infer<typeof ForgotPasswordRequestSchema>
