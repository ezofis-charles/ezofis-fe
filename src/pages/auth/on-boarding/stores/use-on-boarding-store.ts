import { create } from 'zustand'

type Step = 'stepOne' | 'validateLink'

type Store = {
  step: Step
  setStep: (step: Step) => void
}

export const useOnBoardingStore = create<Store>()((set) => ({
  step: 'validateLink',
  setStep: (step: Step) => set({ step }),
}))
