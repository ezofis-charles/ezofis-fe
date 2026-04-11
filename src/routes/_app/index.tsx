import { createFileRoute } from '@tanstack/react-router'
import { DashboardPage } from '@/pages/app/dashboard'

export const Route = createFileRoute('/_app/')({
  component: DashboardPage,
  staticData: {
    pageTitle: 'Dashboard',
  },
})
