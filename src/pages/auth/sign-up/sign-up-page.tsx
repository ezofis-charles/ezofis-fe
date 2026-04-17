import { useEffect } from 'react'
import { SignUpForm } from './components/sign-up-form'
import { SignUpMethod } from './components/sign-up-method'
import { SignUpSuccess } from './components/sign-up-success'
import { useSignUpStore } from './stores/use-sign-up-store'

export const SignUpPage = () => {
  const step = useSignUpStore((state) => state.step)
  const setStep = useSignUpStore((state) => state.setStep)

  useEffect(() => {
    return () => setStep('method')
  }, [setStep])

  return (
    <>
      {step === 'method' && <SignUpMethod />}
      {step === 'form' && <SignUpForm />}
      {step === 'success' && <SignUpSuccess />}
    </>
  )
}
