import type { ReactNode } from 'react'
import { SemiCircleProgress as Base } from '@mantine/core'

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
  green: 'stroke-green-9',
  primary: 'stroke-primary',
  red: 'stroke-red-9',
  secondary: 'stroke-secondary-9',
}

export const ProgressSemiCircle = ({
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
      label={label}
      size={size}
      thickness={thickness}
      value={value}
      classNames={{
        emptySegment: 'stroke-gray-4',
        filledSegment: colorClassNames[color],
      }}
    />
  )
}
