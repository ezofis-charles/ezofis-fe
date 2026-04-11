import type { ReactNode } from 'react'
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
    </>
  )
}
