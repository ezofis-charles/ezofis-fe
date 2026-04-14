import type { ForgotPasswordRequest } from './forgot-password-types'
import { axiosInstance } from './axios'

export async function forgotPassword(payload: ForgotPasswordRequest) {
  await axiosInstance.post('http/200', payload)
}
