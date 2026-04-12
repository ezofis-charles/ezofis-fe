import { z } from 'zod'
import { ItemListSchema, ItemSchema } from './item'

export const USER_SIGNUP_METHOD = z.enum(['email', 'google', 'microsoft'])
export const USER_2SV_METHOD = z.enum(['app', 'email', 'sms'])

export const UserSchema = ItemSchema.extend({
  avatarUrl: z.httpUrl().optional(),
  email: z.email(),
  phoneNumber: z.string(),
  role: z.string(),
  signUpMethod: USER_SIGNUP_METHOD,
  verify2SV: z.object({
    enabled: z.boolean(),
    method: USER_2SV_METHOD,
  }),
})

export type User = z.infer<typeof UserSchema>

export const UserListSchema = ItemListSchema.extend({
  data: z.array(UserSchema),
})

export type UserList = z.infer<typeof UserListSchema>
