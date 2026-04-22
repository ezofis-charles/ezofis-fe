import { cn } from '@/utils/cn'
import { Icon } from './icon'

interface Props {
  icon: string
  className?: string
  color?: 'gray' | 'red'
  iconClass?: string
  ringClass?: string
  surfaceClass?: string
}

export const IconIllustrated = ({
  className,
  color = 'gray',
  icon,
  iconClass,
  ringClass,
  surfaceClass,
}: Props) => {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'flex size-18 items-center justify-center rounded-full transition-colors',
          color === 'gray' ? 'bg-gray-200' : 'bg-red-3',
          ringClass,
        )}
      >
        <div
          className={cn(
            'flex size-12 items-center justify-center rounded-full bg-gray bg-surface-raised shadow-xs transition-colors',
            surfaceClass,
          )}
        >
          <Icon
            name={icon}
            className={cn(
              'size-5.5 transition-colors lg:size-5.5',
              color === 'gray' ? 'text-gray' : 'text-red',
              iconClass,
            )}
          />
        </div>
      </div>
    </div>
  )
}
