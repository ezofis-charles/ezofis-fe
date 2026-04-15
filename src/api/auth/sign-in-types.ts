import { z } from 'zod'
import { USER_OTP_METHOD, UserSchema } from '@/types/user'
import { PasswordSchema } from './common-types'

export const SignInRequestSchema = z.object({
  email: z.email(),
  password: PasswordSchema,
})
export type SignInRequest = z.infer<typeof SignInRequestSchema>

export const SignInResponseSchema = z.discriminatedUnion('status', [
  z.object({
    status: z.literal('AUTHENTICATED'),
    token: z.string(),
    user: UserSchema,
  }),
  z.object({
    method: USER_OTP_METHOD,
    status: z.literal('VERIFY_OTP'),
    token: z.string(),
  }),
])
export type SignInResponse = z.infer<typeof SignInResponseSchema>

export const VerifyOtpRequestSchema = z.object({
  otp: z.string().length(6),
})
export type VerifyOtpRequest = z.infer<typeof VerifyOtpRequestSchema>

export const VerifyOtpResponseSchema = z.object({
  status: z.literal('AUTHENTICATED'),
  token: z.string(),
  user: UserSchema,
})
export type VerifyOtpResponse = z.infer<typeof VerifyOtpResponseSchema>
