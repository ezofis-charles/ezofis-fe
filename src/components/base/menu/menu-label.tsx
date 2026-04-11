import type { ReactNode } from 'react'
import { Menu as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  className?: string
}

export const MenuLabel = ({ children, className }: Props) => {
  return (
    <Base.Label className={cn('px-2 py-0 text-xs/6 text-gray-10', className)}>
      {children}
    </Base.Label>
  )
}
