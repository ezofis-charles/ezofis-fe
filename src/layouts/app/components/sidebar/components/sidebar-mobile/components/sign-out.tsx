import { useNavigate } from '@tanstack/react-router'
import { Icon } from '@/components/base/icon'
import { useSessionStore } from '@/stores/use-session-store'

export const SignOut = () => {
  const clearSession = useSessionStore((state) => state.clearSession)
  const navigate = useNavigate()

  const signOut = () => {
    clearSession()
    navigate({ replace: true, to: '/sign-in' })
  }

  return (
    <div className='flex items-center gap-1' onClick={signOut}>
      <div className='flex size-9 items-center justify-center'>
        <Icon className='text-red-11' name='tabler:logout' />
      </div>

      <div className='min-w-0 flex-1 font-medium whitespace-nowrap text-gray-11'>
        Sign out
      </div>
    </div>
  )
}
