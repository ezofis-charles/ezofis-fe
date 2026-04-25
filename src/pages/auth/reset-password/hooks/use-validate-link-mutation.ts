import { useMutation } from '@tanstack/react-query'
import { validateLink } from '@/api/auth/reset-password-api'
import { useResetPasswordStore } from '../stores/use-reset-password-store'

export default function useValidateLinkMutation() {
  const setStep = useResetPasswordStore((state) => state.setStep)

  return useMutation({
    mutationFn: validateLink,
    onSuccess: () => setStep('form'),
  })
}
