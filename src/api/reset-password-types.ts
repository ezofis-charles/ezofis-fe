import { z } from 'zod'
import { PasswordSchema } from './common-types'

export const ResetPasswordRequestSchema = z
  .object({
    confirmPassword: PasswordSchema,
    password: PasswordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type ResetPasswordRequest = z.infer<typeof ResetPasswordRequestSchema>
