import type { ResetPasswordRequest } from './reset-password-types'
import { axiosInstance } from './axios'

export async function resetPassword(payload: ResetPasswordRequest) {
  await axiosInstance.post('http/200', payload)
}
