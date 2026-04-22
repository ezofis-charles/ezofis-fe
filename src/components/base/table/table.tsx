import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

interface Props extends ComponentProps<'table'> {
  columnBorder?: boolean
  rowBorder?: boolean
  striped?: boolean
  tableBorder?: boolean
}

export const Table = ({
  className,
  columnBorder,
  rowBorder,
  striped,
  tableBorder,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        'overflow-hidden rounded border-gray-200',
        tableBorder && 'border',
        rowBorder &&
          '[&_tr_th]:border-b [&_tr_th]:border-gray-200 [&_tr:not(:last-child)_td]:border-b [&_tr:not(:last-child)_td]:border-gray-200',
        columnBorder &&
          '[&_tr>*:not(:last-child)]:border-r [&_tr>*:not(:last-child)]:border-gray-200',
        striped && '[&_tbody_tr:nth-child(even)>*]:bg-gray-2',
      )}
    >
      <table
        className={cn(
          'w-full border-separate border-spacing-0 text-14 xl:text-13',
          className,
        )}
        {...props}
      />
    </div>
  )
}
