import { create } from 'zustand'

type Step = 'form' | 'success'

type Store = {
  isInitialRender: boolean
  step: Step
  setIsInitialRender: (isInitialRender: boolean) => void
  setStep: (step: Step) => void
}

export const useForgotPasswordStore = create<Store>()((set) => ({
  isInitialRender: true,
  step: 'form',
  setIsInitialRender: (isInitialRender: boolean) => set({ isInitialRender }),
  setStep: (step: Step) => set({ step }),
}))
