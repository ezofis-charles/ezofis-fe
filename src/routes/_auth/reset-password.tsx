import { createFileRoute } from '@tanstack/react-router'
import { ValidateLinkRequestSchema } from '@/api/auth/reset-password-types'
import { InvalidLink } from '@/pages/auth/invalid-link'
import { ResetPasswordPage } from '@/pages/auth/reset-password/reset-password-page'

export const Route = createFileRoute('/_auth/reset-password')({
  component: ResetPasswordPage,
  errorComponent: InvalidLink,
  validateSearch: ValidateLinkRequestSchema,
})
