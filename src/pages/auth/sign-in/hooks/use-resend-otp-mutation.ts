import { useMutation } from '@tanstack/react-query'
import { sendOtp } from '@/api/otp-api'
import { showToast } from '@/components/base/toast/show-toast'
import useCountdown from '@/hooks/use-countdown'

export default function useResendOtpMutation() {
  const { count, resetCountdown, startCountdown, stopCountdown } = useCountdown(
    {
      start: 30,
    },
  )

  const resendOtpMutation = useMutation({
    mutationFn: sendOtp,
    onSettled: () => resetCountdown(),
    onSuccess: () => {
      showToast({
        description: 'Check your inbox for the verification code.',
        title: "We've sent a new code.",
        variant: 'success',
      })
    },
  })

  return {
    count,
    resendOtpMutation,
    resetCountdown,
    startCountdown,
    stopCountdown,
  }
}
