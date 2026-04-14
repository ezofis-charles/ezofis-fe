import { useForm } from '@tanstack/react-form'
import type { ForgotPasswordRequest } from '@/api/forgot-password-types'
import { ForgotPasswordRequestSchema } from '@/api/forgot-password-types'
import useForgotPasswordMutation from './use-forgot-password-mutation'

export default function useForgotPasswordForm() {
  const forgotPasswordMutation = useForgotPasswordMutation()

  const defaultValues: ForgotPasswordRequest = {
    email: '',
  }

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: ForgotPasswordRequestSchema,
    },
    onSubmit: async ({ value }) => forgotPasswordMutation.mutate(value),
  })

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }

  return {
    forgotPasswordMutation,
    form,
    handleSubmit,
  }
}
