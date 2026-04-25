import { create } from 'zustand'
import type { Option } from '@/types/option'

type Step =
  | 'stepFive'
  | 'stepFour'
  | 'stepOne'
  | 'stepSix'
  | 'stepThree'
  | 'stepTwo'
  | 'validateLink'

type Store = {
  challenges: string[]
  companySize: null | Option
  confirmPassword: string
  department: null | Option
  experience: string
  password: string
  recommendation: string
  role: null | Option
  step: Step
  setChallenges: (challenges: string[]) => void
  setCompanySize: (companySize: null | Option) => void
  setConfirmPassword: (confirmPassword: string) => void
  setDepartment: (department: null | Option) => void
  setExperience: (experience: string) => void
  setPassword: (password: string) => void
  setRecommendation: (recommendation: string) => void
  setRole: (role: null | Option) => void
  setStep: (step: Step) => void
}

export const useOnBoardingStore = create<Store>()((set) => ({
  challenges: [],
  companySize: null,
  confirmPassword: '',
  department: null,
  experience: '',
  password: '',
  recommendation: '',
  role: null,
  step: 'validateLink',
  setChallenges: (challenges: string[]) => set({ challenges }),
  setCompanySize: (companySize: null | Option) => set({ companySize }),
  setConfirmPassword: (confirmPassword: string) => set({ confirmPassword }),
  setDepartment: (department: null | Option) => set({ department }),
  setExperience: (experience: string) => set({ experience }),
  setPassword: (password: string) => set({ password }),
  setRecommendation: (recommendation: string) => set({ recommendation }),
  setRole: (role: null | Option) => set({ role }),
  setStep: (step: Step) => set({ step }),
}))
