import { create } from 'zustand'

type Store = {
  isAiChatOpen: boolean
  closeAiChat: () => void
  openAiChat: () => void
  toggleAiChat: () => void
}

export const useAiChatStore = create<Store>()((set) => ({
  isAiChatOpen: false,
  closeAiChat: () => set({ isAiChatOpen: false }),
  openAiChat: () => set({ isAiChatOpen: true }),
  toggleAiChat: () => set((state) => ({ isAiChatOpen: !state.isAiChatOpen })),
}))
