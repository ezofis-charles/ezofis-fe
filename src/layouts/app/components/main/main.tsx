import type { ReactNode } from 'react'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import { cn } from '@/utils/cn'
import { useAiChatStore } from '../../stores/use-ai-chat-store'
import { Topbar } from '../topbar'

interface Props {
  children: ReactNode
}

export const Main = ({ children }: Props) => {
  const sidebarState = useSidebarStore((state) => state.sidebarState)
  const isAiChatOpen = useAiChatStore((state) => state.isAiChatOpen)

  return (
    <main
      className={cn(
        'border-l border-gray-3 transition-[margin] xl:min-h-svh',
        sidebarState === 'collapsed' ? 'xl:ml-13' : 'xl:ml-60',
        isAiChatOpen ? 'border-r border-gray-3 xl:mr-96' : 'xl:mr-0',
      )}
    >
      <Topbar />
      {children}
    </main>
  )
}
