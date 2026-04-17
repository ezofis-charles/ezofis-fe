import { useEffect } from 'react'
import { ResetPasswordForm } from './components/reset-password-form'
import { ResetPasswordSuccess } from './components/reset-password-success'
import { ResetPasswordValidateLink } from './components/reset-password-validate-link'
import { useResetPasswordStore } from './stores/use-reset-password-store'

export const ResetPasswordPage = () => {
  const step = useResetPasswordStore((state) => state.step)
  const setStep = useResetPasswordStore((state) => state.setStep)

  useEffect(() => {
    return () => setStep('validateLink')
  }, [setStep])

  return (
    <>
      {step === 'validateLink' && <ResetPasswordValidateLink />}
      {step === 'form' && <ResetPasswordForm />}
      {step === 'success' && <ResetPasswordSuccess />}
    </>
  )
}
