import { z } from 'zod'
import { USER_AUTH_METHOD, USER_AUTH_STATUS, UserSchema } from '@/types/user'
import { PasswordSchema } from './common-types'

export const OnBoardingRequestSchema = z.object({
  authMethod: USER_AUTH_METHOD,
  challenges: z.array(z.string()),
  companySize: z.string(),
  confirmPassword: PasswordSchema,
  department: z.string(),
  experience: z.string(),
  password: PasswordSchema,
  recommendation: z.string(),
  role: z.string(),
  token: z.string().min(1, 'Token is required'),
})
export type OnBoardingRequest = z.infer<typeof OnBoardingRequestSchema>

export const OnBoardingResponseSchema = z.object({
  status: z.literal(USER_AUTH_STATUS.enum.authenticated),
  token: z.string(),
  user: UserSchema,
})
export type OnBoardingResponse = z.infer<typeof OnBoardingResponseSchema>

export const ValidateLinkRequestSchema = z.object({
  authMethod: USER_AUTH_METHOD,
  token: z.string().min(1, 'Token is required'),
})
export type ValidateLinkRequest = z.infer<typeof ValidateLinkRequestSchema>
