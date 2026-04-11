import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/folders')({
  staticData: {
    pageTitle: 'Folders',
  },
  component: () => <div></div>,
})
