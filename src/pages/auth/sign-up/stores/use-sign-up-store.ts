import type { z } from 'zod'
import { create } from 'zustand'
import type { USER_AUTH_METHOD } from '@/types/user'

export type SignUpMethod = z.infer<typeof USER_AUTH_METHOD>
export type Step = 'form' | 'method' | 'success'

type Store = {
  isInitialRender: boolean
  signUpMethod: SignUpMethod
  step: Step
  setIsInitialRender: (isInitialRender: boolean) => void
  setSignUpMethod: (method: SignUpMethod) => void
  setStep: (step: Step) => void
}

export const useSignUpStore = create<Store>()((set) => ({
  isInitialRender: true,
  signUpMethod: 'email',
  step: 'method',
  setIsInitialRender: (isInitialRender: boolean) => set({ isInitialRender }),
  setSignUpMethod: (signUpMethod: SignUpMethod) => set({ signUpMethod }),
  setStep: (step: Step) => set({ step }),
}))
