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
  // const { data } = await axiosInstance.post('c/e0b0-5d30-497c-be27', payload, {
  //   schema: SignInResponseSchema,
  // })
  // return data

  // otp enabled
  const { data } = await axiosInstance.post('c/def5-8cd6-449d-a5e7', payload, {
    schema: SignInResponseSchema,
  })
  return data
}

export async function verifyOtp(
  payload: VerifyOtpRequest,
): Promise<VerifyOtpResponse> {
  const { data } = await axiosInstance.post('c/e0b0-5d30-497c-be27', payload, {
    schema: VerifyOtpResponseSchema,
  })
  return data
}
