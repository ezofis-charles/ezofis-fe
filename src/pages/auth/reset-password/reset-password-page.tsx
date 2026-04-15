import { useEffect } from 'react'
import { ResetPasswordFormStep } from './components/reset-password-form-step'
import { ResetPasswordSuccessStep } from './components/reset-password-success-step'
import { useResetPasswordStore } from './stores/use-reset-password-store'

export const ResetPasswordPage = () => {
  const step = useResetPasswordStore((state) => state.step)
  const setStep = useResetPasswordStore((state) => state.setStep)

  useEffect(() => {
    return () => {
      setStep('form')
    }
  }, [setStep])

  return (
    <>
      {step === 'form' && <ResetPasswordFormStep />}
      {step === 'success' && <ResetPasswordSuccessStep />}
    </>
  )
}
