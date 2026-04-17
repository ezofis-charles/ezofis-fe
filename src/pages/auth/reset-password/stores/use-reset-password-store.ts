import { create } from 'zustand'

type Step = 'form' | 'success' | 'validateLink'

type Store = {
  step: Step
  setStep: (step: Step) => void
}

export const useResetPasswordStore = create<Store>()((set) => ({
  step: 'validateLink',
  setStep: (step: Step) => set({ step }),
}))
