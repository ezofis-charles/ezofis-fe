import { axiosInstance } from '@/api/axios'
import type { OtpRequest } from './otp-types'

export async function sendOtp(payload: OtpRequest) {
  await axiosInstance.post('http/200', payload)
}
