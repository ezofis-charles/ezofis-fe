import { useMutation } from '@tanstack/react-query'
import { signIn } from '@/api/auth/sign-in.api'
import { useSessionStore } from '@/stores/use-session-store'
import { useSignInStore } from '../stores/use-sign-in-store'

export default function useSignInMutation() {
  const setSession = useSessionStore((state) => state.setSession)
  const setStep = useSignInStore((state) => state.setStep)
  const setOtpMethod = useSignInStore((state) => state.setOtpMethod)

  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      if (data.status === 'AUTHENTICATED') {
        setSession({ token: data.token, user: data.user })
      }

      if (data.status === 'VERIFY_OTP') {
        setStep('otp')
        setOtpMethod(data.method)
      }
    },
  })
}
