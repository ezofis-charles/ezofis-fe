import { useMutation } from '@tanstack/react-query'
import { resetPassword } from '@/api/auth/reset-password-api'
import { useResetPasswordStore } from '../stores/use-reset-password-store'

export default function useResetPasswordMutation() {
  const setStep = useResetPasswordStore((state) => state.setStep)
  const setIsInitialRender = useResetPasswordStore(
    (state) => state.setIsInitialRender,
  )

  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      setStep('success')
      setIsInitialRender(false)
    },
  })
}
