import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, UserAuthStatus } from '@/types/user'
import { USER_AUTH_STATUS } from '@/types/user'

type Store = {
  status: UserAuthStatus
  token: string
  user: User
  clearSession: () => void
  isAuthenticated: () => boolean
  setSession: (session: {
    status: UserAuthStatus
    token: string
    user: User
  }) => void
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
    (set, get) => ({
      status: USER_AUTH_STATUS.enum.unAuthenticated,
      token: '',
      user: initialUserData,
      clearSession: () =>
        set(() => ({
          status: USER_AUTH_STATUS.enum.unAuthenticated,
          token: '',
          user: initialUserData,
        })),
      isAuthenticated: () =>
        get().status === USER_AUTH_STATUS.enum.authenticated,
      setSession: ({ status, token, user }) =>
        set(() => ({ status, token, user })),
      setToken: (token) => set(() => ({ token })),
    }),
    { name: 'session' },
  ),
)
