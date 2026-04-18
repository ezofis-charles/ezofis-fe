import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { signIn } from '@/api/auth/sign-in-api'
import { useSessionStore } from '@/stores/use-session-store'
import { USER_AUTH_STATUS } from '@/types/user'
import { useSignInStore } from '../stores/use-sign-in-store'

export default function useSignInMutation() {
  const setSession = useSessionStore((state) => state.setSession)
  const setToken = useSessionStore((state) => state.setToken)
  const setStep = useSignInStore((state) => state.setStep)
  const setOtpMethod = useSignInStore((state) => state.setOtpMethod)
  const navigate = useNavigate()

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      switch (data.status) {
        case USER_AUTH_STATUS.enum.authenticated: {
          setSession(data)
          navigate({ replace: true, to: '/' })
          break
        }
        case USER_AUTH_STATUS.enum.verifyOtp: {
          setToken(data.token)
          setStep('otp')
          setOtpMethod(data.method)
          break
        }
      }
    },
  })
}
