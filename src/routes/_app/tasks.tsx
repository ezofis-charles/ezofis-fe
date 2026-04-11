import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/tasks')({
  staticData: {
    pageTitle: 'Tasks',
  },
  component: () => <div></div>,
})
