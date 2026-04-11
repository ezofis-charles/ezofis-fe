import { SegmentGroup as Base } from '@ark-ui/react/segment-group'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'

interface Props {
  value: string
  className?: string
  icon?: string
  iconClassName?: string
  label?: string
  labelClassName?: string
}

export const SegmentGroupItem = ({
  className,
  icon,
  iconClassName,
  label,
  labelClassName,
  value,
}: Props) => {
  return (
    <Base.Item
      value={value}
      className={cn(
        'group z-1 flex items-center border-r border-gray-5 transition-colors last:border-r-0 hover:cursor-pointer data-focus-visible:outline data-focus-visible:outline-primary-8',
        label && 'px-3.5',
        icon && label && 'gap-2',
        icon && !label && 'w-9 justify-center',
        className,
      )}
    >
      {icon && (
        <div className='flex size-4 items-center justify-center'>
          <Icon className={iconClassName} name={icon} />
        </div>
      )}
      {label && (
        <Base.ItemText
          className={cn(
            'z-1 font-medium text-gray-11 transition-colors group-hover:text-gray-12 data-[state=checked]:text-gray-13',
            labelClassName,
          )}
        >
          {label}
        </Base.ItemText>
      )}
      <Base.ItemHiddenInput />
    </Base.Item>
  )
}
