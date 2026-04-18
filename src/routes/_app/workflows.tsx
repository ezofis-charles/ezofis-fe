import { createFileRoute } from '@tanstack/react-router'
import { WorkflowsPage } from '@/pages/app/workflows'

export const Route = createFileRoute('/_app/workflows')({
  component: WorkflowsPage,
  staticData: {
    pageTitle: 'Workflows',
  },
})
