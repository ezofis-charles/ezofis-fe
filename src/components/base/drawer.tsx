import type { ReactNode } from 'react'
import { Drawer as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  open: boolean
  closeOnInteractOutside?: boolean
  offset?: number
  position?: 'left' | 'right'
  width?: number | string
  withOverlay?: boolean
  onClose: () => void
}

export const Drawer = ({
  children,
  closeOnInteractOutside = true,
  offset = 8,
  open,
  position = 'right',
  width = 420,
  withOverlay = false,
  onClose,
}: Props) => {
  const classNames = {
    body: 'p-0',
    content: cn(
      'bg-surface',
      offset !== 0 && 'rounded-xl border border-gray-4 shadow-xl',
    ),
    overlay: 'bg-black/40',
  }

  return (
    <Base
      classNames={classNames}
      closeOnClickOutside={closeOnInteractOutside}
      closeOnEscape={closeOnInteractOutside}
      offset={offset}
      opened={open}
      position={position}
      size={width}
      trapFocus={false}
      withCloseButton={false}
      withOverlay={withOverlay}
      onClose={onClose}
    >
      {children}
    </Base>
  )
}
