import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  title: string
  className?: string
}

export const Section = ({ children, className, title }: Props) => {
  return (
    <div className={cn('mb-16', className)}>
      <h2 className='mb-8 border-b border-gray-3 pb-2 text-micro/7 font-semibold text-gray-12'>
        # {title}
      </h2>

      {children}
    </div>
  )
}
