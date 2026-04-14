import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { verifyOtp } from '@/api/sign-in-api'
import { useSessionStore } from '@/stores/use-session-store'
import { useSignInStore } from '../stores/use-sign-in-store'

export default function useVerifyOtpMutation() {
  const setSession = useSessionStore((state) => state.setSession)
  const setStep = useSignInStore((state) => state.setStep)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      setSession({ token: data.token, user: data.user })
      setStep('method')
      navigate({ replace: true, to: '/' })
    },
  })
}
