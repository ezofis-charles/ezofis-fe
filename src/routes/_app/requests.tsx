import { createFileRoute } from '@tanstack/react-router'
import { RequestsPage } from '@/pages/app/requests'

export const Route = createFileRoute('/_app/requests')({
  component: RequestsPage,
  staticData: {
    pageTitle: 'Requests',
  },
})
