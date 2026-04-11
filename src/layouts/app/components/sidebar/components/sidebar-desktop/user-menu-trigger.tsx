import { Avatar } from '@/components/base/avatar'
import { Icon } from '@/components/base/icon'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import { useSessionStore } from '@/stores/use-session-store'
import { cn } from '@/utils/cn'
import { AnimatePresence } from './animate-presence'

export const UserMenuTrigger = () => {
  const user = useSessionStore((state) => state.user)
  const sidebarState = useSidebarStore((state) => state.sidebarState)

  return (
    <div
      className={cn(
        'mx-1 flex cursor-pointer items-center p-1',
        sidebarState === 'expanded' && 'rounded hover:bg-gray-4',
      )}
    >
      <div className='flex h-10 w-8 shrink-0 items-center justify-center'>
        <Avatar
          className='border border-gray-3'
          image={user.avatar}
          imageLabel='user picture'
          initials='CV'
          size={30}
        />
      </div>

      <AnimatePresence className='ml-2.5 flex-1'>
        <div className='flex items-center select-none'>
          <div className='min-w-0 flex-1'>
            <div className='truncate text-micro/5 font-medium text-gray-12'>
              {user.name}
            </div>
            <div className='truncate text-xs/5'>{user.email}</div>
          </div>
          <Icon name='material-symbols:more-vert' />
        </div>
      </AnimatePresence>
    </div>
  )
}
