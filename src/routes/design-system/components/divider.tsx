import { createFileRoute } from '@tanstack/react-router'
import { DividerStory } from '@/stories/design-system/components/divider'

export const Route = createFileRoute('/design-system/components/divider')({
  component: DividerStory,
})
