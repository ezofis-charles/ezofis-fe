import { z } from 'zod'
import { PasswordSchema } from './common-types'

export const OnBoardingRequestSchema = z.object({
  password: PasswordSchema,
  token: z.string().min(1, 'Token is required'),
})

export type OnBoardingRequest = z.infer<typeof OnBoardingRequestSchema>

export const ValidateLinkRequestSchema = z.object({
  token: z.string().min(1, 'Token is required'),
})

export type ValidateLinkRequest = z.infer<typeof ValidateLinkRequestSchema>
