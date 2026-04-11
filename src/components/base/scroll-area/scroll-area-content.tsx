import type { ReactNode } from 'react'
import {
  ScrollArea as Base,
  useScrollAreaContext,
} from '@ark-ui/react/scroll-area'
import { useEffect } from 'react'

interface Props {
  children: ReactNode
  onBottomReached?: () => void
  onTopReached?: () => void
}

export const ScrollAreaContent = ({
  children,
  onBottomReached,
  onTopReached,
}: Props) => {
  const { isAtBottom, isAtTop } = useScrollAreaContext()

  useEffect(() => {
    if (isAtBottom && onBottomReached) {
      onBottomReached()
    }
  }, [isAtBottom, onBottomReached])

  useEffect(() => {
    if (isAtTop && onTopReached) {
      onTopReached()
    }
  }, [isAtTop, onTopReached])

  return <Base.Content>{children}</Base.Content>
}
