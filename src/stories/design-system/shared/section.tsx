import type { ReactNode } from 'react'
import { Title } from '@/components/base/title'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  title: string
  className?: string
}

export const Section = ({ children, className, title }: Props) => {
  return (
    <div className={cn('mb-16', className)}>
      <Title
        level={3}
        title={`# ${title}`}
        titleClassName='mb-8 border-b border-gray-200 pb-2 text-gray xl:text-14 text-gray-700'
      />

      {children}
    </div>
  )
}
