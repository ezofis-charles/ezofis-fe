import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  className?: string
}

export const OverlayHeaderWrapper = ({ children, className }: Props) => {
  return (
    <header
      className={cn(
        'flex h-13 flex-wrap items-center py-2 pr-2 pl-4',
        className,
      )}
    >
      {children}
    </header>
  )
}
