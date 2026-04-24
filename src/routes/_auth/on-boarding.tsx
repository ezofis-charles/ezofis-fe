import { createFileRoute } from '@tanstack/react-router'
import { ValidateLinkRequestSchema } from '@/api/auth/on-boarding-types'
import { InvalidLink } from '@/pages/auth/invalid-link'
import { OnBoardingPage } from '@/pages/auth/on-boarding/on-boarding-page'

export const Route = createFileRoute('/_auth/on-boarding')({
  component: OnBoardingPage,
  errorComponent: InvalidLink,
  validateSearch: ValidateLinkRequestSchema,
})
