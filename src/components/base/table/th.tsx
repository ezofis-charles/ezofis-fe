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
        'text-gray-10 px-4 py-2 text-left align-middle text-12 font-medium',
        className,
      )}
      {...props}
    />
  )
}
