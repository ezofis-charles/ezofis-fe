import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'

export const ResetPasswordSuccess = () => {
  const navigate = useNavigate()

  const goToSignIn = () => {
    navigate({ to: '/sign-in' })
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='Your password has been reset. You can now sign in with your new password.'
        level={1}
        title='Password reset successful'
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
