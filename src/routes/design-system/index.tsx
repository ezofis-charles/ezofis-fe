import { createFileRoute } from '@tanstack/react-router'
import { IndexStory } from '@/stories/design-system'

export const Route = createFileRoute('/design-system/')({
  component: IndexStory,
})
