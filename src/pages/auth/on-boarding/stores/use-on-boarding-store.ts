import { create } from 'zustand'
import type { Option } from '@/types/option'

export const OnBoardingSteps = [
  'validateLink',
  'stepOne',
  'stepTwo',
  'stepThree',
  'stepFour',
  'stepFive',
  'stepSix',
] as const

export type OnBoardingStep = (typeof OnBoardingSteps)[number]

export type OnBoardingFormData = {
  challenges: string[]
  companySize: null | Option
  confirmPassword: string
  department: null | Option
  experience: string
  password: string
  recommendation: string
  role: null | Option
}

type Store = {
  formData: OnBoardingFormData
  step: OnBoardingStep
  resetStore: () => void
  setStep: (step: OnBoardingStep) => void
  updateFormData: (data: Partial<OnBoardingFormData>) => void
}

const initialFormData: OnBoardingFormData = {
  challenges: [],
  companySize: null,
  confirmPassword: '',
  department: null,
  experience: '',
  password: '',
  recommendation: '',
  role: null,
}

export const useOnBoardingStore = create<Store>()((set) => ({
  formData: initialFormData,
  step: 'validateLink',
  resetStore: () => set({ formData: initialFormData, step: 'validateLink' }),
  updateFormData: (data: Partial<OnBoardingFormData>) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  setStep: (step: OnBoardingStep) => set({ step }),
}))

export const getVisibleSteps = (
  authMethod: string | undefined,
): OnBoardingStep[] => {
  if (authMethod === 'email') {
    return OnBoardingSteps.filter(
      (s) => s !== 'validateLink' && s !== 'stepOne',
    )
  }
  return OnBoardingSteps.filter(
    (s) => s !== 'validateLink' && s !== 'stepOne' && s !== 'stepTwo',
  )
}
