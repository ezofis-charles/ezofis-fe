import { useMutation } from '@tanstack/react-query'
import { forgotPassword } from '@/api/forgot-password-api'
import { useForgotPasswordStore } from '../stores/use-forgot-password-store'

export default function useForgotPasswordMutation() {
  const setStep = useForgotPasswordStore((state) => state.setStep)
  const setIsInitialRender = useForgotPasswordStore(
    (state) => state.setIsInitialRender,
  )

  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      setStep('success')
      setIsInitialRender(false)
    },
  })
}
