import { createFileRoute } from '@tanstack/react-router'
import { HighlightStory } from '@/stories/design-system/components/highlight'

export const Route = createFileRoute('/design-system/components/highlight')({
  component: HighlightStory,
})
