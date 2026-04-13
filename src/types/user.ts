import { z } from 'zod'
import { ItemListSchema, ItemSchema } from './item'

export const USER_AUTH_METHOD = z.enum(['email', 'google', 'microsoft'])
export const USER_OTP_METHOD = z.enum(['app', 'email', 'sms'])

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
