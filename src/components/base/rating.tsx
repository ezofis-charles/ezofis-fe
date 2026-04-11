import type { ReactNode } from 'react'
import { Rating as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  value: number
  allowHalf?: boolean
  className?: string
  count?: number
  disabled?: boolean
  emptyIcon?: ReactNode
  error?: boolean
  fullIcon?: ReactNode
  size?: number | string
  onChange: (value: number) => void
}

export const Rating = ({
  allowHalf,
  className,
  count,
  disabled,
  emptyIcon,
  error,
  fullIcon,
  size = '32',
  value,
  onChange,
}: Props) => {
  return (
    <Base
      className={className}
      count={count}
      emptySymbol={emptyIcon}
      fractions={allowHalf ? 2 : 1}
      fullSymbol={fullIcon}
      readOnly={disabled}
      size={size}
      value={value}
      classNames={{
        starSymbol: cn(
          'fill-gray-4 stroke-gray-4 data-filled:fill-yellow-9 data-filled:stroke-yellow-9',
          error && 'fill-red-3 stroke-red-9',
          disabled && 'opacity-50',
        ),
      }}
      onChange={onChange}
    />
  )
}
