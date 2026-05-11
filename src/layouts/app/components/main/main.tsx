import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { useAiChatStore } from '../../stores/use-ai-chat-store'
import { Topbar } from '../topbar'

interface Props {
  children: ReactNode
}

export const Main = ({ children }: Props) => {
  const isAiChatOpen = useAiChatStore((state) => state.isAiChatOpen)

  return (
    <main
      className={cn(
        'flex flex-1 flex-col border-l border-gray-3 bg-surface xl:rounded-l-xl',
        isAiChatOpen && 'border-r xl:rounded-r-xl',
      )}
    >
      <Topbar />
      <div className='flex-1'>{children}</div>
    </main>
  )
}
