import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { PasswordSchema } from '@/api/auth/common-types'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

const SetPasswordRequestSchema = z
  .object({
    confirmPassword: PasswordSchema,
    password: PasswordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

type SetPasswordRequest = z.infer<typeof SetPasswordRequestSchema>

export default function useResetPasswordForm() {
  const setStep = useOnBoardingStore((state) => state.setStep)
  const setOnboardingData = useOnBoardingStore(
    (state) => state.setOnboardingData,
  )

  const defaultValues: SetPasswordRequest = {
    confirmPassword: '',
    password: '',
  }

  const form = useForm({
    defaultValues,
    validators: {
      onSubmit: SetPasswordRequestSchema,
    },
    onSubmit: async ({ value }) => {
      setOnboardingData('password', value.password)
      setOnboardingData('confirmPassword', value.confirmPassword)
      setStep('stepThree')
    },
  })

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }

  return {
    form,
    handleSubmit,
  }
}
