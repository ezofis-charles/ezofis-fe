import { Avatar } from '@/components/base/avatar'
import { useSessionStore } from '@/stores/use-session-store'

export const UserMenuTrigger = () => {
  const user = useSessionStore((state) => state.user)

  return (
    <div className='flex flex-1 cursor-pointer items-center gap-3'>
      <div className='flex h-10 w-8 shrink-0 items-center justify-center'>
        <Avatar
          className='border border-gray-3'
          image={user.avatar}
          imageLabel='user picture'
          initials='CV'
          size={32}
        />
      </div>

      <div className='flex-1 select-none'>
        <div className='truncate text-micro/5 font-medium text-gray-12'>
          {user.name}
        </div>
        <div className='truncate text-xs/5'>{user.email}</div>
      </div>
    </div>
  )
}
