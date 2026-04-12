import { z } from 'zod'
import { UserSchema } from '@/types/user'

export const PasswordSchema = z
  .string()
  .min(8, 'Must be at least 8 characters')
  .regex(/[A-Z]/, 'Must contain at least 1 uppercase letter (A-Z)')
  .regex(/[a-z]/, 'Must contain at least 1 lowercase letter (a-z)')
  .regex(/[0-9]/, 'Must contain at least 1 number (0-9)')
  .regex(/[!@#$%^&*]/, 'Must contain at least 1 special character (!@#$%^&*)')

// Sign in

export const SignInRequestSchema = z.object({
  email: z.email(),
  password: PasswordSchema,
})
export type SignInRequest = z.infer<typeof SignInRequestSchema>

export const SIGNIN_STATUS = z.enum(['Authenticated', 'Verify2SV'])

export const SignInResponseSchema = z.object({
  accessToken: z.string(),
  status: SIGNIN_STATUS,
  user: UserSchema,
})
export type SignInResponse = z.infer<typeof SignInResponseSchema>

// Verify 2SV

export const Verify2SVRequestSchema = z.object({
  code: z.string().length(6),
})
export type Verify2SVRequest = z.infer<typeof Verify2SVRequestSchema>

export const Verify2SVResponseSchema = z.object({
  accessToken: z.string().min(1, 'Access token is required'),
})
export type Verify2SVResponse = z.infer<typeof Verify2SVResponseSchema>
