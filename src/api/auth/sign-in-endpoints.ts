import { axiosInstance } from '@/api/axios'
import type {
  SignInRequest,
  SignInResponse,
  Verify2SVRequest,
  Verify2SVResponse,
} from './sign-in-types'
import { SignInResponseSchema, Verify2SVResponseSchema } from './sign-in-types'

export async function signin(payload: SignInRequest): Promise<SignInResponse> {
  const { data } = await axiosInstance.post('http/200', payload, {
    schema: SignInResponseSchema,
  })
  return data
}

export async function verify2SV(
  payload: Verify2SVRequest,
): Promise<Verify2SVResponse> {
  const { data } = await axiosInstance.post('http/200', payload, {
    schema: Verify2SVResponseSchema,
  })
  return data
}
