import { useEffect } from 'react'
import { SignInFormStep } from './components/sign-in-form-step'
import { SignInMethodStep } from './components/sign-in-method-step'
import { SignInOtpStep } from './components/sign-in-otp-step'
import { useSignInStore } from './stores/use-sign-in-store'

export const SignInPage = () => {
  const step = useSignInStore((state) => state.step)
  const setStep = useSignInStore((state) => state.setStep)

  useEffect(() => {
    return () => {
      setStep('method')
    }
  }, [setStep])

  return (
    <>
      {step === 'method' && <SignInMethodStep />}
      {step === 'form' && <SignInFormStep />}
      {step === 'otp' && <SignInOtpStep />}
    </>
  )
}
