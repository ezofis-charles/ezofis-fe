import { create } from 'zustand'

interface User {
  avatar: string
  email: string
  id: string
  name: string
}

type Store = {
  user: User
}

export const useSessionStore = create<Store>((set) => ({
  user: {
    avatar: 'https://i.pravatar.cc/150?img=13',
    email: 'charles@ezofis.com',
    id: '1',
    name: 'Charles Vinoth',
  },
  setUser: (user: User) => set({ user }),
}))
