import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/portals')({
  staticData: {
    pageTitle: 'Portals',
  },
  component: () => <div></div>,
})
