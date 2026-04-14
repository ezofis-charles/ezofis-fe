import { useForm } from '@tanstack/react-form'
import type { VerifyOtpRequest } from '@/api/sign-in-types'
import { VerifyOtpRequestSchema } from '@/api/sign-in-types'
import useVerifyOtpMutation from './use-verify-otp-mutation'

export default function useVerifyOtpForm() {
  const verifyOtpMutation = useVerifyOtpMutation()

  const defaultValues: VerifyOtpRequest = {
    otp: '',
  }

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: VerifyOtpRequestSchema,
    },
    onSubmit: async ({ value }) => verifyOtpMutation.mutate(value),
  })

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }

  return {
    form,
    handleSubmit,
    verifyOtpMutation,
  }
}
