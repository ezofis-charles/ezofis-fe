import { createFileRoute } from '@tanstack/react-router'
import { TimelineStory } from '@/stories/design-system/components/timeline'

export const Route = createFileRoute('/design-system/components/timeline')({
  component: TimelineStory,
})
