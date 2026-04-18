import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { verifyOtp } from '@/api/auth/sign-in-api'
import { useSessionStore } from '@/stores/use-session-store'

export default function useVerifyOtpMutation() {
  const setSession = useSessionStore((state) => state.setSession)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      setSession(data)
      navigate({ replace: true, to: '/' })
    },
  })
}
