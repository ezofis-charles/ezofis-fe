import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/my-account/{-$slug}')({
  staticData: {
    pageTitle: 'My Account',
  },
  component: () => <div>Hello "/_app/my-account/$slug"!</div>,
})
