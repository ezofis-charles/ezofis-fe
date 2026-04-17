import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types/user'

type Store = {
  token: string
  user: User
  clearSession: () => void
  setSession: ({ token, user }: { token: string; user: User }) => void
  setToken: (token: string) => void
}

const initialUserData: User = {
  avatarUrl: '',
  createdAt: '',
  createdBy: '',
  email: '',
  id: '',
  name: '',
  otp: {
    enabled: true,
    method: 'email',
  },
  phoneNumber: '',
  role: '',
  signUpMethod: 'email',
  updatedAt: '',
  updatedBy: '',
}

export const useSessionStore = create<Store>()(
  persist(
    (set) => ({
      token: '',
      user: initialUserData,
      clearSession: () =>
        set(() => ({
          token: '',
          user: initialUserData,
        })),
      setSession: ({ token, user }) => set(() => ({ token, user })),
      setToken: (token) => set(() => ({ token })),
    }),
    { name: 'session' },
  ),
)
