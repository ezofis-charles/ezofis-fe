import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/workflows')({
  staticData: {
    pageTitle: 'Workflows',
  },
  component: () => <div></div>,
})
