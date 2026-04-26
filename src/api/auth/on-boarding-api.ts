import { axiosInstance } from '@/api/axios'
import type {
  OnBoardingRequest,
  OnBoardingResponse,
  ValidateLinkRequest,
} from './on-boarding-types'
import { OnBoardingResponseSchema } from './on-boarding-types'

export async function onBoarding(
  payload: OnBoardingRequest,
): Promise<OnBoardingResponse> {
  const { data } = await axiosInstance.post('c/b573-5d0a-4fc8-82f5', payload, {
    schema: OnBoardingResponseSchema,
  })
  return data
}

export async function validateLink(payload: ValidateLinkRequest) {
  await axiosInstance.post('http/200', payload)
}
