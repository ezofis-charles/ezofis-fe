import type { ReactNode } from 'react'
import { ScrollArea } from '@/components/base/scroll-area'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const OverlayContent = ({ children, className, ...props }: Props) => {
  return (
    <ScrollArea className={className} {...props}>
      {children}
    </ScrollArea>
  )
}
