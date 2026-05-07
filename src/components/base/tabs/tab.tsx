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
        'group/tab flex h-8 items-center gap-2 rounded px-2 transition-colors hover:cursor-pointer hover:bg-gray-4 focus-visible:bg-gray-4 focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
    >
      {icon && (
        <Icon
          name={icon}
          className={cn(
            iconClassName,
            'group-data-[color=gray]/tabs:group-data-selected/tab:text-gray-12 group-data-[color=primary]/tabs:group-data-selected/tab:text-primary-11 group-data-[color=secondary]/tabs:group-data-selected/tab:text-secondary-9',
          )}
        />
      )}
      <span className='font-medium text-gray-11 group-hover/tab:text-gray-12 group-data-selected/tab:text-gray-12'>
        {label}
      </span>

      {counter && (
        <span
          className={cn(
            'rounded bg-gray-3 px-1.5 text-12/5 font-medium text-gray-12 group-hover/tab:bg-surface',
            counterClassName,
          )}
        >
          {counter}
        </span>
      )}
    </Base.Trigger>
  )
}
