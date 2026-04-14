import { useForm } from '@tanstack/react-form'
import type { SignInRequest } from '@/api/sign-in-types'
import { SignInRequestSchema } from '@/api/sign-in-types'
import useSignInMutation from './use-sign-in-mutation'

export default function useSignInForm() {
  const signInMutation = useSignInMutation()

  const defaultValues: SignInRequest = {
    email: 'charles@gmail.com',
    password: 'Admin@123',
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
