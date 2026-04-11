import { createFileRoute } from '@tanstack/react-router'
import { RatingStory } from '@/stories/design-system/components/rating'

export const Route = createFileRoute('/design-system/components/rating')({
  component: RatingStory,
})
