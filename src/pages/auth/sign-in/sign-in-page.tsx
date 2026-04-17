import { useEffect } from 'react'
import { SignInForm } from './components/sign-in-form'
import { SignInMethod } from './components/sign-in-method'
import { SignInOtp } from './components/sign-in-otp'
import { useSignInStore } from './stores/use-sign-in-store'

export const SignInPage = () => {
  const step = useSignInStore((state) => state.step)
  const setStep = useSignInStore((state) => state.setStep)

  useEffect(() => {
    return () => setStep('method')
  }, [setStep])

  return (
    <>
      {step === 'method' && <SignInMethod />}
      {step === 'form' && <SignInForm />}
      {step === 'otp' && <SignInOtp />}
    </>
  )
}
