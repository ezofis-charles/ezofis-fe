import type { ReactNode } from 'react'
import { Modal as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  open: boolean
  closeOnInteractOutside?: boolean
  fullScreen?: boolean
  width?: number | string
  onClose: () => void
}

export const Modal = ({
  children,
  closeOnInteractOutside = true,
  fullScreen,
  open,
  width,
  onClose,
}: Props) => {
  const classNames = {
    body: 'p-0',
    content: cn(
      'border border-gray-4 bg-surface shadow-xl',
      fullScreen ? 'rounded-none' : 'rounded-xl',
    ),
    overlay: 'bg-black/40',
  }

  return (
    <Base
      classNames={classNames}
      closeOnClickOutside={closeOnInteractOutside}
      closeOnEscape={closeOnInteractOutside}
      fullScreen={fullScreen}
      opened={open}
      size={width}
      withCloseButton={false}
      centered
      onClose={onClose}
    >
      {children}
    </Base>
  )
}
