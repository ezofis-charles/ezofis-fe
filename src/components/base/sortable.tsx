import type { ReactNode } from 'react'
import { useSortable } from '@dnd-kit/react/sortable'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  id: string
  index: number
  className?: string
  draggingClassName?: string
}

export const Sortable = ({
  children,
  className,
  draggingClassName,
  id,
  index,
}: Props) => {
  const { isDragging, ref } = useSortable({ id, index })

  return (
    <li className={cn(className, isDragging && draggingClassName)} ref={ref}>
      {children}
    </li>
  )
}
