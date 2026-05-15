import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/settings')({
  staticData: {
    pageTitle: 'Settings',
  },
  component: () => <div></div>,
})
