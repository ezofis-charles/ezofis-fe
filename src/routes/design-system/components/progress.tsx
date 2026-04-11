import { createFileRoute } from '@tanstack/react-router'
import { ProgressStory } from '@/stories/design-system/components/progress'

export const Route = createFileRoute('/design-system/components/progress')({
  component: ProgressStory,
})
