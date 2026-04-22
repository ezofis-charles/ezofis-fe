import { Avatar } from '@/components/base/avatar'
import { useSessionStore } from '@/stores/use-session-store'

export const UserMenuTrigger = () => {
  const user = useSessionStore((state) => state.user)

  return (
    <div className='flex flex-1 cursor-pointer items-center gap-3'>
      <div className='flex h-10 w-8 shrink-0 items-center justify-center'>
        <Avatar
          className='border border-gray-200'
          image={user.avatarUrl}
          imageLabel='user picture'
          initials='CV'
          size={32}
        />
      </div>

      <div className='flex-1 select-none'>
        <div className='text-gray-12 truncate text-14 font-medium xl:text-13/5'>
          {user.name}
        </div>
        <div className='truncate text-12/5'>{user.email}</div>
      </div>
    </div>
  )
}
