import { createFileRoute } from '@tanstack/react-router'
import { AlertStory } from '@/stories/design-system/components/alert'

export const Route = createFileRoute('/design-system/components/alert')({
  component: AlertStory,
})
