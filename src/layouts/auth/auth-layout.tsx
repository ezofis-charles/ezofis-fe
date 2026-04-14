import type { ReactNode } from 'react'
import { ScrollArea } from '@/components/base/scroll-area'
import { Logo } from '@/components/common/logo'

interface Props {
  children: ReactNode
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <ScrollArea className='flex min-h-svh justify-center bg-surface'>
      <div className='mt-[max(0px,calc(50svh-240px))] w-72 space-y-6 py-12'>
        <Logo className='justify-center' hideText />
        {children}
      </div>
    </ScrollArea>
  )
}
