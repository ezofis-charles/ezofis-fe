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
        'group mx-1.5 flex cursor-pointer items-center p-1',
        sidebarState === 'expanded' && 'squircle-md rounded hover:bg-gray-4',
      )}
    >
      <div className='flex h-10 w-8 shrink-0 items-center justify-center'>
        <Avatar
          imageLabel='user picture'
          initials={user?.name?.slice(0, 2).toUpperCase()}
          size={30}
          className={cn(
            sidebarState === 'expanded' && 'group-hover:bg-surface',
          )}
        />
      </div>

      <AnimatePresence className='ml-2.5 flex-1'>
        <div className='flex items-center select-none'>
          <div className='min-w-0 flex-1'>
            <div className='truncate text-14 font-medium text-gray-12 xl:text-13'>
              {user?.name}
            </div>
            <div className='truncate text-12/5'>{user?.email}</div>
          </div>
          <Icon name='material-symbols:more-vert' />
        </div>
      </AnimatePresence>
    </div>
  )
}
