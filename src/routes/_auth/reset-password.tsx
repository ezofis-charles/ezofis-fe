import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { ResetPasswordPage } from '@/pages/auth/reset-password/reset-password-page'

const SearchSchema = z.object({
  token: z.string(),
})

export const Route = createFileRoute('/_auth/reset-password')({
  component: ResetPasswordPage,
  validateSearch: SearchSchema,
})
