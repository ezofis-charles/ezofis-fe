import type { ReactNode } from 'react'
import { RingProgress as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

type ProgressColor = 'green' | 'primary' | 'red' | 'secondary'

interface Props {
  value: number
  className?: string
  color?: ProgressColor
  label?: ReactNode
  size?: number
  thickness?: number
}

const colorClassNames: Record<ProgressColor, string> = {
  green: 'last:stroke-green-9',
  primary: 'last:stroke-primary',
  red: 'last:stroke-red-9',
  secondary: 'last:stroke-secondary-9',
}

export const ProgressCircle = ({
  className,
  color = 'primary',
  label,
  size,
  thickness = 8,
  value,
}: Props) => {
  return (
    <Base
      className={className}
      classNames={{ curve: cn('first:stroke-gray-4', colorClassNames[color]) }}
      label={label}
      sections={[{ color: 'primary', value }]}
      size={size}
      thickness={thickness}
      roundCaps
    />
  )
}
