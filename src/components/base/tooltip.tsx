import type { TooltipProps as BaseProps } from '@mantine/core'
import type { ReactNode } from 'react'
import { Tooltip as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

export type TooltipPosition = BaseProps['position']

interface Props {
  children: ReactNode
  content: string
  closeDelay?: number
  color?: TooltipColor
  disabled?: boolean
  offset?: BaseProps['offset']
  open?: boolean
  openDelay?: number
  position?: TooltipPosition
  width?: number
  withArrow?: boolean
}

type TooltipColor = 'gray' | 'primary' | 'red' | 'secondary'

const colorClassName: Record<TooltipColor, string> = {
  gray: 'bg-gray-13 text-gray-1',
  primary: 'bg-primary-9',
  red: 'bg-red-9',
  secondary: 'bg-secondary-9',
}

export const Tooltip = ({
  children,
  closeDelay = 0,
  color = 'gray',
  content,
  disabled,
  offset,
  open,
  openDelay = 0,
  position,
  width,
  withArrow,
}: Props) => {
  return (
    <Base
      arrowOffset={8}
      arrowRadius={1.5}
      arrowSize={6}
      closeDelay={closeDelay}
      defaultOpened={open}
      disabled={disabled}
      label={content}
      multiline={!!width}
      offset={offset}
      openDelay={openDelay}
      position={position}
      w={width}
      withArrow={withArrow}
      classNames={{
        tooltip: cn(
          'rounded-sm px-2 py-1 text-12 text-pretty text-white',
          colorClassName[color],
        ),
      }}
    >
      {children}
    </Base>
  )
}
