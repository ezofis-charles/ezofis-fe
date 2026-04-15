import { axiosInstance } from '@/api/axios'
import type { ForgotPasswordRequest } from './forgot-password-types'

export async function forgotPassword(payload: ForgotPasswordRequest) {
  await axiosInstance.post('http/200', payload)
}
