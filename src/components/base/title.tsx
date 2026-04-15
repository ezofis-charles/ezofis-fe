import { cn } from '@/utils/cn'

interface Props {
  title: string
  className?: string
  description?: string
  descriptionClassName?: string
  level?: 1 | 2 | 3
  titleClassName?: string
}

export const Title = ({
  className,
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
          className={cn('text-lg/6 font-semibold text-gray-13', titleClassName)}
        >
          {title}
        </h1>
      )}

      {level === 2 && (
        <h2
          className={cn('text-mini font-semibold text-gray-13', titleClassName)}
        >
          {title}
        </h2>
      )}

      {level === 3 && (
        <h3
          className={cn(
            'text-micro font-semibold text-gray-13',
            titleClassName,
          )}
        >
          {title}
        </h3>
      )}

      {description && (
        <p
          className={cn(
            'text-micro/6 text-pretty text-gray-11',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
