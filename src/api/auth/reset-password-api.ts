import { axiosInstance } from '@/api/axios'
import type {
  ResetPasswordRequest,
  ValidateLinkRequest,
} from './reset-password-types'

export async function resetPassword(payload: ResetPasswordRequest) {
  await axiosInstance.post('http/200', payload)
}

export async function validateLink(payload: ValidateLinkRequest) {
  await axiosInstance.post('http/200', payload)
}
