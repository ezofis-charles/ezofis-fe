import type { ReactNode } from 'react'
import { AiChatBar } from './components/ai-chat-bar'
import { Main } from './components/main'
import { Sidebar } from './components/sidebar'

interface Props {
  children: ReactNode
}

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Sidebar />
      <Main>{children}</Main>
      <AiChatBar />
    </>
  )
}
