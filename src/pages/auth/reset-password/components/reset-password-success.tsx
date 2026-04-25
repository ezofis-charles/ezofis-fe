import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { AnimatePop } from '@/pages/auth/animate-pop'

export const ResetPasswordSuccess = () => {
  const navigate = useNavigate()

  const goToSignIn = () => {
    navigate({ to: '/sign-in' })
  }

  return (
    <AnimatePop
      description='Your password has been reset. You can now sign in with your new password.'
      title='Password reset successful'
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
