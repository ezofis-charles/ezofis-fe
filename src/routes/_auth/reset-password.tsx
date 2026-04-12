import { createFileRoute } from '@tanstack/react-router'
import { ResetPasswordPage } from '@/pages/auth/reset-password/reset-password-page'

export const Route = createFileRoute('/_auth/reset-password')({
  component: ResetPasswordPage,
})
