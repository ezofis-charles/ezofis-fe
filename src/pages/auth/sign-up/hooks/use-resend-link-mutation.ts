import { useMutation } from '@tanstack/react-query'
import { sendOtp } from '@/api/auth/otp-api'
import { showToast } from '@/components/base/toast/show-toast'
import useCountdown from '@/hooks/use-countdown'

export default function useResendLinkMutation() {
  const { count, resetCountdown, startCountdown, stopCountdown } = useCountdown(
    {
      start: 30,
    },
  )

  const resendLinkMutation = useMutation({
    mutationFn: sendOtp,
    onSettled: () => resetCountdown(),
    onSuccess: () => {
      showToast({
        description: 'Check your inbox for the verification link.',
        title: "We've sent a new verification link.",
        variant: 'success',
      })
    },
  })

  return {
    count,
    resendLinkMutation,
    resetCountdown,
    startCountdown,
    stopCountdown,
  }
}
