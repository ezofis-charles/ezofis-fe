import type { ReactNode } from 'react'
import { ButtonClose } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { cn } from '@/utils/cn'
import { OverlayHeaderWrapper } from './overlay-header-wrapper'

interface Props {
  title: string
  children?: ReactNode
  className?: string
  onClose: () => void
}

export const OverlayHeader = ({
  children,
  className,
  title,
  onClose,
}: Props) => {
  return (
    <OverlayHeaderWrapper className={cn('justify-between', className)}>
      <Title level={2} title={title} />
      {children}
      <ButtonClose onClick={onClose} />
    </OverlayHeaderWrapper>
  )
}
