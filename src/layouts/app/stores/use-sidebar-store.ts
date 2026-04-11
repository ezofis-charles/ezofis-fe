import { create } from 'zustand'
import type { SidebarState } from '../components/sidebar/sidebar.types'

type Store = {
  sidebarState: SidebarState
  setSidebarState: (state: SidebarState) => void
  toggleSidebar: () => void
}

export const useSidebarStore = create<Store>()((set) => ({
  sidebarState: 'collapsed',
  toggleSidebar: () =>
    set((state) => ({
      sidebarState:
        state.sidebarState === 'collapsed' ? 'expanded' : 'collapsed',
    })),
  setSidebarState: (state: SidebarState) => set({ sidebarState: state }),
}))
