import type { MenuProps as BaseProps } from '@mantine/core'
import type { ReactNode } from 'react'
import { Menu as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  target: ReactNode
  className?: string
  closeOnClickOutside?: boolean
  closeOnItemClick?: boolean
  defaultOpen?: boolean
  offset?: BaseProps['offset']
  open?: boolean
  position?: BaseProps['position']
  targetClassName?: string
  width?: BaseProps['width']
  withinPortal?: BaseProps['withinPortal']
  onChange?: BaseProps['onChange']
}

export const Menu = ({
  children,
  className,
  closeOnClickOutside = true,
  closeOnItemClick = true,
  defaultOpen,
  open,
  target,
  targetClassName,
  ...rest
}: Props) => {
  return (
    <Base
      {...rest}
      closeOnClickOutside={closeOnClickOutside}
      closeOnItemClick={closeOnItemClick}
      defaultOpened={defaultOpen}
      opened={open}
      transitionProps={{ transition: 'pop' }}
      returnFocus
      classNames={{
        dropdown: cn(
          'border-gray-4 space-y-0.5 rounded-lg border bg-surface-raised p-1 shadow-xl',
          className,
        ),
        item: 'group text-gray-12 hover:bg-gray-4 focus-visible:bg-gray-4 flex h-8 items-center gap-2 rounded px-2 transition-colors hover:text-gray-900 focus-visible:outline-0',
        itemLabel: 'text-14 font-medium transition-colors xl:text-13',
        itemSection: 'm-0 text-gray transition-colors group-hover:text-gray',
      }}
    >
      <Base.Target>
        <div className={targetClassName}>{target}</div>
      </Base.Target>
      <Base.Dropdown>{children}</Base.Dropdown>
    </Base>
  )
}
