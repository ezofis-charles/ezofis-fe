import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { OnBoardingPage } from '@/pages/auth/on-boarding/on-boarding-page'
import { USER_AUTH_METHOD } from '@/types/user'

const SearchSchema = z.object({
  auth: USER_AUTH_METHOD,
  token: z.string(),
})

export const Route = createFileRoute('/_auth/on-boarding')({
  component: OnBoardingPage,
  validateSearch: SearchSchema,
})
