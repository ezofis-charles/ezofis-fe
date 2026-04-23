import type { ReactNode } from 'react'
import { Timeline as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  className?: string
  color?: 'gray' | 'primary' | 'secondary'
}

const colorClass = {
  gray: 'border-gray-4 bg-gray-9',
  primary: 'border-primary-4 bg-primary',
  secondary: 'border-secondary-4 bg-secondary-9',
}

export const Timeline = ({ children, className, color = 'primary' }: Props) => {
  return (
    <Base
      bulletSize={16}
      className={className}
      lineWidth={2}
      classNames={{
        item: 'pl-2.5 before:border-gray-3',
        itemBullet: cn('border-4', colorClass[color]),
        itemTitle: 'mb-2 font-medium text-gray-12',
      }}
    >
      {children}
    </Base>
  )
}
