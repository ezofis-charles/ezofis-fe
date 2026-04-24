import { useMutation } from '@tanstack/react-query'
import type { ValidateLinkRequest } from '@/api/auth/reset-password-types'
import { validateLink } from '@/api/auth/reset-password-api'
import { ValidateLinkRequestSchema } from '@/api/auth/reset-password-types'
import { useResetPasswordStore } from '../stores/use-reset-password-store'

export default function useValidateLinkMutation() {
  const setStep = useResetPasswordStore((state) => state.setStep)

  return useMutation({
    mutationFn: (payload: ValidateLinkRequest) => {
      const parsedPayload = ValidateLinkRequestSchema.parse(payload)
      return validateLink(parsedPayload)
    },
    onSuccess: () => setStep('form'),
  })
}
