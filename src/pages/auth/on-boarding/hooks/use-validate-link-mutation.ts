import { useMutation } from '@tanstack/react-query'
import { useSearch } from '@tanstack/react-router'
import { validateLink } from '@/api/auth/on-boarding-api'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

export default function useValidateLinkMutation() {
  const { authMethod, token } = useSearch({ from: '/_auth/on-boarding' })
  const setStep = useOnBoardingStore((state) => state.setStep)

  return useMutation({
    mutationFn: () => validateLink({ authMethod, token }),
    onSuccess: () => setStep('stepOne'),
  })
}
