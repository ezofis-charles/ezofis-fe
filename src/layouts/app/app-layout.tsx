import type { ReactNode } from 'react'
import { AiChatBar } from './components/ai-chat-bar'
import { Main } from './components/main'
import { Sidebar } from './components/sidebar'

interface Props {
  children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className='flex h-dvh w-full overflow-hidden bg-surface-muted'>
      <Sidebar />
      <Main>{children}</Main>
      <AiChatBar />
    </div>
  )
}
