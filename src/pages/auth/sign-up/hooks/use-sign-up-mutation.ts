import { useMutation } from '@tanstack/react-query'
import { signUp } from '@/api/auth/sign-up-api'
import { useSignUpStore } from '../stores/use-sign-up-store'

export default function useSignUpMutation() {
  const setStep = useSignUpStore((state) => state.setStep)
  const setIsInitialRender = useSignUpStore((state) => state.setIsInitialRender)

  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      setStep('success')
      setIsInitialRender(false)
    },
  })
}
