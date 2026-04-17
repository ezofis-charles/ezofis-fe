import { useMutation } from '@tanstack/react-query'
import { validateLink } from '@/api/auth/on-boarding-api'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

export default function useValidateLinkMutation() {
  const setStep = useOnBoardingStore((state) => state.setStep)

  return useMutation({
    mutationFn: validateLink,
    onSuccess: () => setStep('stepOne'),
  })
}
