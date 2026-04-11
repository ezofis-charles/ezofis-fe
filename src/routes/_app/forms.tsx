import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/forms')({
  staticData: {
    pageTitle: 'Forms',
  },
  component: () => <div></div>,
})
