import type { z } from 'zod'
import { create } from 'zustand'
import type { USER_AUTH_METHOD, USER_OTP_METHOD } from '@/types/user'

type SignInMethod = z.infer<typeof USER_AUTH_METHOD>
type Step = 'form' | 'method' | 'otp'
type OtpMethod = z.infer<typeof USER_OTP_METHOD>

type Store = {
  method: SignInMethod
  otpMethod: OtpMethod
  step: Step
  setOtpMethod: (otpMethod: OtpMethod) => void
  setSignInMethod: (method: SignInMethod) => void
  setStep: (step: Step) => void
}

export const useSignInStore = create<Store>()((set) => ({
  method: 'email',
  otpMethod: 'email',
  step: 'method',
  setOtpMethod: (otpMethod: OtpMethod) => set({ otpMethod }),
  setSignInMethod: (method: SignInMethod) => set({ method }),
  setStep: (step: Step) => set({ step }),
}))
