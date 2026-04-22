import { Avatar } from '@/components/base/avatar'
import { Icon } from '@/components/base/icon'
import { useSessionStore } from '@/stores/use-session-store'
import { cn } from '@/utils/cn'

interface Props {
  className?: string
}

export const UserMenuTrigger = ({ className }: Props) => {
  const user = useSessionStore((state) => state.user)

  return (
    <div
      className={cn(
        'mx-1 flex cursor-pointer items-center gap-3 p-1',
        className,
      )}
    >
      <div className='flex h-10 w-8 shrink-0 items-center justify-center'>
        <Avatar
          className='border border-gray-200'
          image={user.avatarUrl}
          imageLabel='user picture'
          initials='CV'
          size={32}
        />
      </div>

      <div className='flex flex-1 items-center select-none'>
        <div className='min-w-0 flex-1'>
          <div className='text-gray-12 truncate text-14 font-medium xl:text-13/5'>
            {user.name}
          </div>
          <div className='truncate text-12/5'>{user.email}</div>
        </div>
        <Icon name='material-symbols:more-vert' />
      </div>
    </div>
  )
}
