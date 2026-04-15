import { useMutation } from '@tanstack/react-query'
import { forgotPassword } from '@/api/auth/forgot-password-api'
import { showToast } from '@/components/base/toast/show-toast'
import useCountdown from '@/hooks/use-countdown'

export default function useResendLinkMutation() {
  const { count, resetCountdown, startCountdown, stopCountdown } = useCountdown(
    {
      start: 30,
    },
  )

  const resendLinkMutation = useMutation({
    mutationFn: forgotPassword,
    onSettled: () => resetCountdown(),
    onSuccess: () => {
      showToast({
        description: 'Check your inbox for the reset link.',
        title: "We've sent a new reset link.",
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
