import { createFileRoute } from '@tanstack/react-router'
import { IndexStory } from '@/stories/design-system/components'

export const Route = createFileRoute('/design-system/components/')({
  component: IndexStory,
})
