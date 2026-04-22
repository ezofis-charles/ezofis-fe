import type { PopoverProps as BaseProps } from '@mantine/core'
import type { ReactNode } from 'react'
import { Popover as Base } from '@mantine/core'

interface Props {
  children: ReactNode
  target: ReactNode
  offset?: BaseProps['offset']
  position?: BaseProps['position']
  width?: BaseProps['width']
  withArrow?: boolean
}

export const Popover = ({
  children,
  offset,
  position,
  target,
  width,
  withArrow = false,
}: Props) => {
  return (
    <Base
      arrowOffset={20}
      arrowRadius={1}
      arrowSize={10}
      offset={offset}
      position={position}
      transitionProps={{ duration: 150 }}
      width={width}
      withArrow={withArrow}
      classNames={{
        arrow: 'bg-surface-raised',
        dropdown:
          'border-gray-4 rounded-lg border bg-surface-raised p-0 shadow-xl',
      }}
    >
      <Base.Target>{target}</Base.Target>
      <Base.Dropdown>{children}</Base.Dropdown>
    </Base>
  )
}
