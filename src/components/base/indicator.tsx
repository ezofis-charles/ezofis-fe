import type { IndicatorProps } from '@mantine/core'
import type { ReactNode } from 'react'
import { Indicator as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

type IndicatorColor = 'primary' | 'red' | 'secondary'

interface Props {
  animate?: boolean
  children?: ReactNode
  className?: string
  color?: IndicatorColor
  disabled?: boolean
  offset?: number
  position?: IndicatorProps['position']
  size?: number
}

const colorClassName: Record<IndicatorColor, string> = {
  primary: 'bg-primary before:bg-primary',
  red: 'bg-red before:bg-red',
  secondary: 'bg-secondary before:bg-secondary',
}

export const Indicator = ({
  animate,
  children,
  className,
  color = 'primary',
  disabled,
  offset,
  position,
  size = 5,
}: Props) => {
  return (
    <Base
      className={cn('inline-block', className)}
      disabled={disabled}
      offset={offset}
      position={position}
      processing={animate}
      size={size}
      classNames={{
        indicator: colorClassName[color],
      }}
    >
      {children}
    </Base>
  )
}
