import { axiosInstance } from '@/api/axios'
import type {
  OnBoardingRequest,
  ValidateLinkRequest,
} from './on-boarding-types'

export async function onBoarding(payload: OnBoardingRequest) {
  await axiosInstance.post('http/200', payload)
}

export async function validateLink(payload: ValidateLinkRequest) {
  await axiosInstance.post('http/200', payload)
}
