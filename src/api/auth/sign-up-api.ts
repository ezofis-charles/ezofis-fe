import { axiosInstance } from '@/api/axios'
import type { SignUpRequest } from './sign-up-types'

export async function signUp(payload: SignUpRequest) {
  await axiosInstance.post('http/200', payload)
}
