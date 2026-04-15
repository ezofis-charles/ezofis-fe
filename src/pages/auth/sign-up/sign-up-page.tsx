import { useEffect } from 'react'
import { SignUpFormStep } from './components/sign-up-form-step'
import { SignUpMethodStep } from './components/sign-up-method-step'
import { SignUpSuccessStep } from './components/sign-up-success-step'
import { useSignUpStore } from './stores/use-sign-up-store'

export const SignUpPage = () => {
  const step = useSignUpStore((state) => state.step)
  const setStep = useSignUpStore((state) => state.setStep)

  useEffect(() => {
    return () => {
      setStep('method')
    }
  }, [setStep])

  return (
    <>
      {step === 'method' && <SignUpMethodStep />}
      {step === 'form' && <SignUpFormStep />}
      {step === 'success' && <SignUpSuccessStep />}
    </>
  )
}
