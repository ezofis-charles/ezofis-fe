import { useForm } from '@tanstack/react-form'
import type { SignUpRequest } from '@/api/auth/sign-up-types'
import { SignUpRequestSchema } from '@/api/auth/sign-up-types'
import useSignUpMutation from './use-sign-up-mutation'

export default function useSignUpForm() {
  const signUpMutation = useSignUpMutation()

  const defaultValues: SignUpRequest = {
    email: '',
  }

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: SignUpRequestSchema,
    },
    onSubmit: async ({ value }) => signUpMutation.mutate(value),
  })

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }

  return {
    form,
    handleSubmit,
    signUpMutation,
  }
}
