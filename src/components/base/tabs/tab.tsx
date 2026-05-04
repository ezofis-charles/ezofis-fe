import { Tabs as Base } from '@ark-ui/react/tabs'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'

interface Props {
  label: string
  value: string
  className?: string
  counter?: string
  counterClassName?: string
  disabled?: boolean
  icon?: string
  iconClassName?: string
}

export const Tab = ({
  className,
  counter,
  counterClassName,
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
        'group/tab flex h-9 items-center gap-2 rounded px-2 font-medium text-gray-11 transition-colors hover:cursor-pointer hover:bg-gray-4 hover:text-gray-12 focus-visible:ring-2 focus-visible:ring-primary-8 focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-50 data-selected:text-gray-12 xl:h-8',
        className,
      )}
    >
      {icon && (
        <Icon
          name={icon}
          className={cn(
            iconClassName,
            'group-data-[color=gray]/tabs:group-data-selected/tab:text-gray-12 group-data-[color=primary]/tabs:group-data-selected/tab:text-primary-11 group-data-[color=secondary]/tabs:group-data-selected/tab:text-secondary-10',
          )}
        />
      )}
      <div className='inline-flex items-baseline gap-1'>
        {label}
        {counter && (
          <span className={cn('font-normal text-gray-9', counterClassName)}>
            ({counter})
          </span>
        )}
      </div>
    </Base.Trigger>
  )
}
