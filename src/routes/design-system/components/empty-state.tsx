import { createFileRoute } from '@tanstack/react-router'
import { EmptyStateStory } from '@/stories/design-system/components/empty-state'

export const Route = createFileRoute('/design-system/components/empty-state')({
  component: EmptyStateStory,
})
