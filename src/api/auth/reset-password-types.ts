import { z } from 'zod'
import { PasswordSchema } from './common-types'

export const ResetPasswordRequestSchema = z
  .object({
    confirmPassword: PasswordSchema,
    password: PasswordSchema,
    token: z.string().min(1, 'Token is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>

export const ValidateLinkRequestSchema = z.object({
  token: z.string().min(1, 'Token is required'),
})

export type ValidateLinkRequest = z.infer<typeof ValidateLinkRequestSchema>
