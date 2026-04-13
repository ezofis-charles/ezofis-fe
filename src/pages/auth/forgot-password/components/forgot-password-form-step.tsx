import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/base/button'
import { InputText } from '@/components/base/inputs'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { useForgotPasswordStore } from '../stores/use-forgot-password-store'

export const ForgotPasswordFormStep = () => {
  const setStep = useForgotPasswordStore((state) => state.setStep)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const onSignInClick = () => {
    navigate({ to: '/sign-in' })
  }

  const onSendResetLinkClick = () => {
    setStep('success')
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description="Enter your email address and we'll send you a link to reset your password"
        level={1}
        title='Forgot your password?'
      />

      <InputText
        label='Email'
        placeholder='Enter your email'
        size='md'
        value={email}
        onChange={setEmail}
      />

      <div className='space-y-4'>
        <Button
          className='w-full justify-center'
          label='Send reset link'
          size='lg'
          onClick={onSendResetLinkClick}
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
