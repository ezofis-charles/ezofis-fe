import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface Props {
  title: string
  className?: string
  customDescription?: ReactNode
  description?: string
  descriptionClassName?: string
  level?: 1 | 2 | 3
  titleClassName?: string
}

export const Title = ({
  className,
  customDescription,
  description,
  descriptionClassName,
  level = 3,
  title,
  titleClassName,
}: Props) => {
  return (
    <div className={cn('min-w-0 space-y-1', className)}>
      {level === 1 && (
        <h1
          className={cn(
            'text-lg leading-6 font-semibold text-gray-13',
            titleClassName,
          )}
        >
          {title}
        </h1>
      )}

      {level === 2 && (
        <h2
          className={cn(
            'text-16 leading-6 font-semibold text-gray-13 xl:text-15',
            titleClassName,
          )}
        >
          {title}
        </h2>
      )}

      {level === 3 && (
        <h3
          className={cn(
            'text-14 leading-6 font-semibold text-gray-13 xl:text-13',
            titleClassName,
          )}
        >
          {title}
        </h3>
      )}

      {description && (
        <p
          className={cn(
            'text-14 leading-6 text-pretty text-gray-11 xl:text-13',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}

      {customDescription}
    </div>
  )
}
