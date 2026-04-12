import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { useForgotPasswordStore } from '../stores/use-forgot-password-store'

const onReSendResetLinkClick = () => {
  // TODO: Implement resend reset link
}

export const ForgotPasswordSuccessStep = () => {
  const setStep = useForgotPasswordStore((state) => state.setStep)
  const navigate = useNavigate()

  const onSignInClick = () => {
    navigate({ to: '/sign-in' })
    setStep('form')
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description="We've sent a reset link to your email. Follow the instructions to set a new password"
        level={1}
        title='Check your email'
      />

      <div className='space-y-4'>
        <Button
          className='w-full justify-center'
          label='Resend reset link'
          size='lg'
          onClick={onReSendResetLinkClick}
        />

        <div
          className='cursor-pointer text-center hover:underline'
          onClick={onSignInClick}
        >
          Back to sign in
        </div>
      </div>
    </AnimatePop>
  )
}
