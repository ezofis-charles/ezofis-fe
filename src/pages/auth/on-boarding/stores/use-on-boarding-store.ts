import { create } from 'zustand'

type Step =
  | 'stepFive'
  | 'stepFour'
  | 'stepOne'
  | 'stepThree'
  | 'stepTwo'
  | 'validateLink'

type Store = {
  password: string
  step: Step
  setPassword: (password: string) => void
  setStep: (step: Step) => void
}

export const useOnBoardingStore = create<Store>()((set) => ({
  password: '',
  step: 'validateLink',
  setPassword: (password: string) => set({ password }),
  setStep: (step: Step) => set({ step }),
}))
