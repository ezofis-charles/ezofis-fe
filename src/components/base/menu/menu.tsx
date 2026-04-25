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
          'space-y-0.5 rounded-lg border border-gray-4 bg-surface p-1 shadow-xl',
          className,
        ),
        item: 'group flex h-9 items-center gap-2 rounded px-2 font-medium text-gray-12 transition-colors hover:bg-gray-4 hover:text-gray-12 focus-visible:bg-gray-4 focus-visible:outline-0 xl:h-8',
        itemLabel: 'text-14 transition-colors xl:text-13',
        itemSection:
          'm-0 text-gray-11 transition-colors group-hover:text-gray-11',
      }}
    >
      <Base.Target>
        <div className={targetClassName}>{target}</div>
      </Base.Target>
      <Base.Dropdown>{children}</Base.Dropdown>
    </Base>
  )
}
