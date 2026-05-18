import { create } from 'zustand'

type NotificationTab = null | string

type Store = {
  isNotificationsOpen: boolean
  tab: NotificationTab
  unreadCount: number
  closeNotifications: () => void
  openNotifications: () => void
  setTab: (tab: NotificationTab) => void
}

export const useNotificationsStore = create<Store>()((set) => ({
  isNotificationsOpen: false,
  tab: 'unread',
  unreadCount: 3,
  closeNotifications: () => set({ isNotificationsOpen: false }),
  openNotifications: () => set({ isNotificationsOpen: true }),
  setTab: (tab) => set({ tab }),
}))
