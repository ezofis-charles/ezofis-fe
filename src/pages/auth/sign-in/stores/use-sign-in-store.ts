import { create } from 'zustand'

type Method = 'email' | 'google' | 'microsoft'
type Step = 'form' | 'method' | 'otp'

type Store = {
  method: Method
  step: Step
  setMethod: (method: Method) => void
  setStep: (step: Step) => void
}

export const useSignInStore = create<Store>()((set) => ({
  method: 'email',
  step: 'method',
  setMethod: (method: Method) => set({ method }),
  setStep: (step: Step) => set({ step }),
}))
