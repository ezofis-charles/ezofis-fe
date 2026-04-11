import { createFileRoute } from '@tanstack/react-router'
import { TourStory } from '@/stories/design-system/components/tour'

export const Route = createFileRoute('/design-system/components/tour')({
  component: TourStory,
})
