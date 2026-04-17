import { useEffect } from 'react'
import { ResetPasswordFormStep } from './components/reset-password-form-step'
import { ResetPasswordSuccessStep } from './components/reset-password-success-step'
import { ResetPasswordValidateLinkStep } from './components/reset-password-validate-link-step'
import { useResetPasswordStore } from './stores/use-reset-password-store'

export const ResetPasswordPage = () => {
  const step = useResetPasswordStore((state) => state.step)
  const setStep = useResetPasswordStore((state) => state.setStep)

  useEffect(() => {
    return () => setStep('validateLink')
  }, [setStep])

  return (
    <>
      {step === 'validateLink' && <ResetPasswordValidateLinkStep />}
      {step === 'form' && <ResetPasswordFormStep />}
      {step === 'success' && <ResetPasswordSuccessStep />}
    </>
  )
}
