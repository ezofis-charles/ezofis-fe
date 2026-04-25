import { useRouter } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { AnimatePop } from '@/pages/auth/animate-pop'

export const InvalidLink = () => {
  const router = useRouter()

  const goToSignIn = () => {
    router.navigate({ to: '/sign-in' })
  }

  return (
    <AnimatePop
      description='The reset link you used is either invalid or has expired. Please request a new one.'
      title='Invalid link'
    >
      <Button
        className='w-full justify-center'
        label='Go to sign in'
        size='lg'
        onClick={goToSignIn}
      />
    </AnimatePop>
  )
}
