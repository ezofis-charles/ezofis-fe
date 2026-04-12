import { ForgotPasswordFormStep } from './components/forgot-password-form-step'
import { ForgotPasswordSuccessStep } from './components/forgot-password-success-step'
import { useForgotPasswordStore } from './stores/use-forgot-password-store'

export const ForgotPasswordPage = () => {
  const step = useForgotPasswordStore((state) => state.step)

  return (
    <>
      {step === 'form' && <ForgotPasswordFormStep />}
      {step === 'success' && <ForgotPasswordSuccessStep />}
    </>
  )
}
