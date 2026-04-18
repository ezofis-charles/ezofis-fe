import { axiosInstance } from '@/api/axios'
import type {
  SignInRequest,
  SignInResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
} from './sign-in-types'
import { SignInResponseSchema, VerifyOtpResponseSchema } from './sign-in-types'

export async function signIn(payload: SignInRequest): Promise<SignInResponse> {
  // otp not enabled
  // const { data } = await axiosInstance.post('c/b573-5d0a-4fc8-82f5', payload, {
  //   schema: SignInResponseSchema,
  // })
  // return data

  // otp enabled
  const { data } = await axiosInstance.post('c/d038-5251-4361-b4d4', payload, {
    schema: SignInResponseSchema,
  })
  return data
}

export async function verifyOtp(
  payload: VerifyOtpRequest,
): Promise<VerifyOtpResponse> {
  const { data } = await axiosInstance.post('c/b573-5d0a-4fc8-82f5', payload, {
    schema: VerifyOtpResponseSchema,
  })
  return data
}
