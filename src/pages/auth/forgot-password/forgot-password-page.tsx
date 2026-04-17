import { useEffect } from 'react'
import { ForgotPasswordForm } from './components/forgot-password-form'
import { ForgotPasswordSuccess } from './components/forgot-password-success'
import { useForgotPasswordStore } from './stores/use-forgot-password-store'

export const ForgotPasswordPage = () => {
  const step = useForgotPasswordStore((state) => state.step)
  const setStep = useForgotPasswordStore((state) => state.setStep)

  useEffect(() => {
    return () => setStep('form')
  }, [setStep])

  return (
    <>
      {step === 'form' && <ForgotPasswordForm />}
      {step === 'success' && <ForgotPasswordSuccess />}
    </>
  )
}
