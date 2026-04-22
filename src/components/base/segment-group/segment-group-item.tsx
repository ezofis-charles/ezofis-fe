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
        'group border-gray-5 data-focus-visible:outline-primary-8 z-1 flex items-center border-r transition-colors last:border-r-0 hover:cursor-pointer data-focus-visible:outline data-[state=checked]:bg-gray-200',
        label && 'px-3',
        icon && label && 'gap-2',
        icon && !label && 'w-8 justify-center',
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
            'group-hover:text-gray-12 z-1 font-medium text-gray transition-colors data-[state=checked]:text-gray-900',
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
