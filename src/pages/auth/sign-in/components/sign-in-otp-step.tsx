import { useState } from 'react'
import { Button } from '@/components/base/button'
import { InputPin } from '@/components/base/inputs'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { useSignInStore } from '../stores/use-sign-in-store'

export const SignInOtpStep = () => {
  const setSignInMethod = useSignInStore((state) => state.setSignInMethod)
  const setStep = useSignInStore((state) => state.setStep)

  const [otp, setOtp] = useState('')

  const handleBackToSignInClick = () => {
    setSignInMethod('email')
    setStep('method')
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='Enter the 6-digit code sent to your email'
        level={1}
        title='Two-Step Verification'
      />

      <InputPin length={6} placeholder='0' value={otp} onChange={setOtp} />

      <div className='space-y-4'>
        <Button
          className='w-full justify-center'
          label='Verify'
          size='lg'
          onClick={() => {}}
        />

        <div
          className='cursor-pointer text-center hover:underline'
          onClick={handleBackToSignInClick}
        >
          Resend link
        </div>
      </div>
    </AnimatePop>
  )
}
