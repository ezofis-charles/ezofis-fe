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
        'group/tab squircle-md relative flex h-full items-center gap-1.5 rounded pl-px transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full hover:cursor-pointer hover:after:bg-gray-4 focus-visible:outline-0 disabled:pointer-events-none disabled:opacity-50',
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
            'squircle-sm rounded-sm bg-primary-3 px-1 text-12/5 font-medium text-primary-11',
            counterClassName,
          )}
        >
          {counter}
        </span>
      )}
    </Base.Trigger>
  )
}
