import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Content = ({ children }: Props) => {
  return <div>{children}</div>
}
