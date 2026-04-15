import { createFileRoute } from '@tanstack/react-router'
import { ResetPasswordInvalidPage } from '@/pages/auth/reset-password/reset-password-invalid-page'

export const Route = createFileRoute('/_auth/reset-password/')({
  component: ResetPasswordInvalidPage,
})
