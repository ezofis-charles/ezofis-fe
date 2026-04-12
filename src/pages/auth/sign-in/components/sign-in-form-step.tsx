import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/base/button'
import { InputPassword, InputText } from '@/components/base/inputs'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { useSignInStore } from '../stores/use-sign-in-store'

export const SignInFormStep = () => {
  const setStep = useSignInStore((state) => state.setStep)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onForgotPasswordClick = () => {
    navigate({ to: '/forgot-password' })
    setStep('method')
  }

  const onSignInClick = () => {
    setStep('otp')
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='Enter your email and password to continue'
        level={1}
        title='Welcome Back'
      />

      <div className='space-y-4'>
        <InputText label='Email' size='md' value={email} onChange={setEmail} />
        <InputPassword
          label='Password'
          size='md'
          value={password}
          onChange={setPassword}
        />
      </div>

      <div className='space-y-4'>
        <Button
          className='w-full justify-center'
          label='Sign in'
          size='lg'
          onClick={onSignInClick}
        />

        <div
          className='cursor-pointer text-center hover:underline'
          onClick={onForgotPasswordClick}
        >
          Forgot password?
        </div>
      </div>
    </AnimatePop>
  )
}
