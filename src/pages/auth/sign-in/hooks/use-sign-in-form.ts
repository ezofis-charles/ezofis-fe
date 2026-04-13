import { useForm } from '@tanstack/react-form'
import type { SignInRequest } from '@/api/auth/sign-in.types'
import { SignInRequestSchema } from '@/api/auth/sign-in.types'
import useSignInMutation from './use-sign-in-mutation'

export default function useSignInForm() {
  const signInMutation = useSignInMutation()

  const defaultValues: SignInRequest = {
    email: '',
    password: '',
  }

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: SignInRequestSchema,
    },
    onSubmit: async ({ value }) => signInMutation.mutate(value),
  })

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }

  return {
    form,
    handleSubmit,
    signInMutation,
  }
}
