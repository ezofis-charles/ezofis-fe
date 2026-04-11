import type { ReactNode } from 'react'
import { Timeline as Base } from '@mantine/core'

interface Props {
  title: string
  children?: ReactNode
  className?: string
}

export const TimelineItem = ({ children, className, title }: Props) => {
  return (
    <Base.Item className={className} title={title}>
      {children}
    </Base.Item>
  )
}
