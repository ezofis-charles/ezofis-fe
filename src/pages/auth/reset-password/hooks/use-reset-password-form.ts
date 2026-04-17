import { useForm } from '@tanstack/react-form'
import { useSearch } from '@tanstack/react-router'
import type { ResetPasswordRequest } from '@/api/auth/reset-password-types'
import { ResetPasswordRequestSchema } from '@/api/auth/reset-password-types'
import useResetPasswordMutation from './use-reset-password-mutation'

export default function useResetPasswordForm() {
  const { token } = useSearch({ from: '/_auth/reset-password' })
  const resetPasswordMutation = useResetPasswordMutation()

  const defaultValues: ResetPasswordRequest = {
    confirmPassword: '',
    password: '',
    token,
  }

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: ResetPasswordRequestSchema,
    },
    onSubmit: async ({ value }) => resetPasswordMutation.mutate(value),
  })

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }

  return {
    form,
    handleSubmit,
    resetPasswordMutation,
  }
}
