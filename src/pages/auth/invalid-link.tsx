import { useRouter } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'

export const InvalidLink = () => {
  const router = useRouter()

  const goToSignIn = () => {
    router.navigate({ to: '/sign-in' })
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='The reset link you used is either invalid or has expired. Please request a new one.'
        level={1}
        title='Invalid link'
      />

      <Button
        className='w-full justify-center'
        label='Go to sign in'
        size='lg'
        onClick={goToSignIn}
      />
    </AnimatePop>
  )
}
