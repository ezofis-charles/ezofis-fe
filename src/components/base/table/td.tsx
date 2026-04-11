import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

export const Td = ({
  className,
  colSpan,
  rowSpan,
  ...props
}: ComponentProps<'td'>) => {
  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={cn(
        'bg-surface-raised px-4 py-2.5 align-middle font-normal wrap-anywhere text-gray-12',
        className,
      )}
      {...props}
    />
  )
}
