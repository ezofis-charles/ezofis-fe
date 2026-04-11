import type { ReactNode } from 'react'
import { useRouter } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Drawer as Base } from 'vaul'

interface Props {
  children: ReactNode
  open: boolean
  onClose: () => void
}

export const Sheet = ({ children, open, onClose }: Props) => {
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = router.subscribe('onBeforeNavigate', onClose)
    return unsubscribe
  }, [onClose, router])

  return (
    <Base.Root open={open} autoFocus onClose={onClose}>
      <Base.Portal>
        <Base.Overlay className='fixed inset-0 bg-black/40' />
        <Base.Content
          aria-describedby='bottom sheet'
          className='fixed right-0 bottom-0 left-0 z-250 h-fit rounded-t-2xl border-t border-gray-4 bg-surface outline-none'
        >
          <Base.Title className='hidden'>Sheet</Base.Title>
          <Base.Description className='hidden'>Sheet</Base.Description>
          <Base.Handle className='my-2 w-12! rounded-full bg-gray-6! opacity-100!' />
          {children}
        </Base.Content>
      </Base.Portal>
    </Base.Root>
  )
}
