import { z } from 'zod'
import { USER_OTP_METHOD } from '@/types/user'

export const OtpRequestSchema = z.object({
  method: z.enum([USER_OTP_METHOD.enum.email, USER_OTP_METHOD.enum.sms]),
})

export type OtpRequest = z.infer<typeof OtpRequestSchema>
