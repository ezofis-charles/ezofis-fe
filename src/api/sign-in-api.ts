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
  // const { data } = await axiosInstance.post('c/ec54-bbd2-4c90-985d', payload, {
  //   schema: SignInResponseSchema,
  // })
  // return data

  // otp enabled
  const { data } = await axiosInstance.post('c/a754-97f8-4784-88ec', payload, {
    schema: SignInResponseSchema,
  })
  return data
}

export async function verifyOtp(
  payload: VerifyOtpRequest,
): Promise<VerifyOtpResponse> {
  const { data } = await axiosInstance.post('c/ec54-bbd2-4c90-985d', payload, {
    schema: VerifyOtpResponseSchema,
  })
  return data
}
