import { createFileRoute } from '@tanstack/react-router'
import { ProgressCircleStory } from '@/stories/design-system/components/progress-circle'

export const Route = createFileRoute(
  '/design-system/components/progress-circle',
)({
  component: ProgressCircleStory,
})
