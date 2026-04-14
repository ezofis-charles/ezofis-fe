import type { z } from 'zod'
import { create } from 'zustand'
import type { USER_AUTH_METHOD, USER_OTP_METHOD } from '@/types/user'

type SignInMethod = z.infer<typeof USER_AUTH_METHOD>
type Step = 'form' | 'method' | 'otp'
type OtpMethod = z.infer<typeof USER_OTP_METHOD>

type Store = {
  isInitialRender: boolean
  otpMethod: OtpMethod
  signInMethod: SignInMethod
  step: Step
  setIsInitialRender: (isInitialRender: boolean) => void
  setOtpMethod: (otpMethod: OtpMethod) => void
  setSignInMethod: (method: SignInMethod) => void
  setStep: (step: Step) => void
}

export const useSignInStore = create<Store>()((set) => ({
  isInitialRender: true,
  otpMethod: 'email',
  signInMethod: 'email',
  step: 'method',
  setIsInitialRender: (isInitialRender: boolean) => set({ isInitialRender }),
  setOtpMethod: (otpMethod: OtpMethod) => set({ otpMethod }),
  setSignInMethod: (signInMethod: SignInMethod) => set({ signInMethod }),
  setStep: (step: Step) => set({ step }),
}))
