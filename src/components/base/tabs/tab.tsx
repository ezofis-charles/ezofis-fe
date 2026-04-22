import { Tabs as Base } from '@ark-ui/react/tabs'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'

interface Props {
  label: string
  value: string
  className?: string
  disabled?: boolean
  icon?: string
  iconClassName?: string
}

export const Tab = ({
  className,
  disabled,
  icon,
  iconClassName,
  label,
  value,
}: Props) => {
  return (
    <Base.Trigger
      disabled={disabled}
      value={value}
      className={cn(
        'hover:text-gray-12 focus-visible:ring-primary-8 flex h-8 items-center gap-2 rounded font-medium text-gray transition-colors hover:cursor-pointer focus-visible:ring-2 focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
    >
      {icon && (
        <div className='flex size-4 items-center justify-center'>
          <Icon className={iconClassName} name={icon} />
        </div>
      )}
      {label}
    </Base.Trigger>
  )
}
