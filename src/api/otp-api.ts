import type { OtpRequest } from './otp-types'
import { axiosInstance } from './axios'

export async function sendOtp(payload: OtpRequest) {
  await axiosInstance.post('http/200', payload)
}
