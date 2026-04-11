import { createFileRoute } from '@tanstack/react-router'
import { BadgeStory } from '@/stories/design-system/components/badge'

export const Route = createFileRoute('/design-system/components/badge')({
  component: BadgeStory,
})
