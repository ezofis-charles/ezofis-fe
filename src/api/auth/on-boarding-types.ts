import { z } from 'zod'
import { USER_AUTH_METHOD } from '@/types/user'
import { PasswordSchema } from './common-types'

export const OnBoardingRequestSchema = z.object({
  password: PasswordSchema,
  token: z.string().min(1, 'Token is required'),
})

export type OnBoardingRequest = z.infer<typeof OnBoardingRequestSchema>

export const ValidateLinkRequestSchema = z.object({
  authMethod: USER_AUTH_METHOD,
  token: z.string().min(1, 'Token is required'),
})

export type ValidateLinkRequest = z.infer<typeof ValidateLinkRequestSchema>
