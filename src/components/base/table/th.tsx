import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

export const Th = ({
  className,
  colSpan,
  rowSpan,
  ...props
}: ComponentProps<'th'>) => {
  return (
    <th
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={cn(
        'bg-surface-raised px-4 py-3 text-left align-middle text-micro font-medium text-gray-13',
        className,
      )}
      {...props}
    />
  )
}
