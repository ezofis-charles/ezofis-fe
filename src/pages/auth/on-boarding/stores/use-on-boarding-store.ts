import { create } from 'zustand'

type Step =
  | 'stepFive'
  | 'stepFour'
  | 'stepOne'
  | 'stepThree'
  | 'stepTwo'
  | 'validateLink'

type OnboardingData = {
  automationExperience: string
  companySize: string
  confirmPassword: string
  department: string
  password: string
  role: string
}

type Store = {
  onboardingData: OnboardingData
  step: Step
  setOnboardingData: <K extends keyof OnboardingData>(
    key: K,
    value: OnboardingData[K],
  ) => void
  setStep: (step: Step) => void
}

export const useOnBoardingStore = create<Store>()((set) => ({
  step: 'validateLink',
  setOnboardingData: (key, value) =>
    set((state) => ({
      onboardingData: { ...state.onboardingData, [key]: value },
    })),
  setStep: (step: Step) => set({ step }),
  onboardingData: {
    automationExperience: '',
    companySize: '',
    confirmPassword: '',
    department: '',
    password: '',
    role: '',
  },
}))
