import { createFileRoute } from '@tanstack/react-router'
import { FormsPage } from '@/pages/app/forms'

export const Route = createFileRoute('/_app/forms')({
  component: FormsPage,
  staticData: {
    pageTitle: 'Forms',
  },
})
