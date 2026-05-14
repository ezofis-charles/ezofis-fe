import type { ReactNode } from 'react'
import { AiChatBar } from './components/ai-chat-bar'
import { Sidebar } from './components/sidebar'
import { Topbar } from './components/topbar'

interface Props {
  children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className='flex h-dvh w-full overflow-hidden bg-surface-muted'>
      <Sidebar />
      <main className='flex flex-1 flex-col border-l border-gray-3 bg-surface xl:rounded-l-xl'>
        <Topbar />
        <div className='flex-1 overflow-y-auto'>{children}</div>
      </main>
      <AiChatBar />
    </div>
  )
}
