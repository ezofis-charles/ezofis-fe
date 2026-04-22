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
        'flex items-center gap-1 text-14 font-medium text-gray xl:text-13',
        className,
      )}
    >
      {label}
      {optional && <span className='text-gray-10 font-normal'>(optional)</span>}
      {required && <span className='text-red'>*</span>}
      {tooltip && (
        <Tooltip content={tooltip} position='top-start' width={tooltipWidth}>
          <Icon
            className='text-gray-9 -mt-0.5 cursor-pointer transition-colors hover:text-gray'
            name='tabler:help'
          />
        </Tooltip>
      )}
    </div>
  )
}
