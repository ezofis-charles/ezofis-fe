import type { ReactNode } from 'react'
import { Menu as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  className?: string
}

export const MenuLabel = ({ children, className }: Props) => {
  return (
    <Base.Label className={cn('text-gray-10 px-2 py-0 text-12/6', className)}>
      {children}
    </Base.Label>
  )
}
