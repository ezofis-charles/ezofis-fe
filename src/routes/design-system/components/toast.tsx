import { createFileRoute } from '@tanstack/react-router'
import { ToastStory } from '@/stories/design-system/components/toast'

export const Route = createFileRoute('/design-system/components/toast')({
  component: ToastStory,
})
