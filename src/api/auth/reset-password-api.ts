import { axiosInstance } from '@/api/axios'
import type { ResetPasswordRequest } from './reset-password-types'

export async function resetPassword(payload: ResetPasswordRequest) {
  await axiosInstance.post('http/200', payload)
}
