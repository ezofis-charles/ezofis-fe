import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  className?: string
}

export const OverlayFooterWrapper = ({ children, className }: Props) => {
  return (
    <footer className={cn('flex h-14 items-center px-4', className)}>
      {children}
    </footer>
  )
}
