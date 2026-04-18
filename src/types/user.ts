import { z } from 'zod'
import { ItemListSchema, ItemSchema } from './item'

export const USER_AUTH_METHOD = z.enum(['email', 'google', 'microsoft'])
export type UserAuthMethod = z.infer<typeof USER_AUTH_METHOD>

export const USER_OTP_METHOD = z.enum(['totp', 'email', 'sms'])
export type UserOtpMethod = z.infer<typeof USER_OTP_METHOD>

export const USER_AUTH_STATUS = z.enum([
  'authenticated',
  'verifyOtp',
  'unAuthenticated',
])
export type UserAuthStatus = z.infer<typeof USER_AUTH_STATUS>

export const UserSchema = ItemSchema.extend({
  avatarUrl: z.httpUrl().optional(),
  email: z.email(),
  otp: z.object({
    enabled: z.boolean(),
    method: USER_OTP_METHOD,
  }),
  phoneNumber: z.string(),
  role: z.string(),
  signUpMethod: USER_AUTH_METHOD,
})

export type User = z.infer<typeof UserSchema>

export const UserListSchema = ItemListSchema.extend({
  data: z.array(UserSchema),
})

export type UserList = z.infer<typeof UserListSchema>
