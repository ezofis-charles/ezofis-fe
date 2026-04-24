import { Icon } from '@/components/base/icon'
import { Tooltip } from '@/components/base/tooltip'
import { cn } from '@/utils/cn'

interface Props {
  className?: string
  label?: string
  optional?: boolean
  required?: boolean
  tooltip?: string
  tooltipWidth?: number
}

export const InputLabel = ({
  className,
  label,
  optional,
  required,
  tooltip,
  tooltipWidth,
}: Props) => {
  return (
    <div
      className={cn(
        'flex items-center gap-1 text-14 font-medium text-gray-11 xl:text-13',
        className,
      )}
    >
      {label}
      {optional && <span className='font-normal text-gray-10'>(optional)</span>}
      {required && <span className='text-red-11'>*</span>}
      {tooltip && (
        <Tooltip content={tooltip} position='top-start' width={tooltipWidth}>
          <Icon
            className='-mt-0.5 cursor-pointer text-gray-9 transition-colors hover:text-gray-11'
            name='tabler:help'
          />
        </Tooltip>
      )}
    </div>
  )
}
