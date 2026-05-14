import type { ReactNode } from 'react'
import { ScrollArea } from '@/components/base/scroll-area'

interface Props {
  children: ReactNode
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <ScrollArea className='flex h-dvh items-center justify-center bg-surface'>
      {children}
    </ScrollArea>
  )
}
