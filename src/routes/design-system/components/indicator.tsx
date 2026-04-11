import { createFileRoute } from '@tanstack/react-router'
import { IndicatorStory } from '@/stories/design-system/components/indicator'

export const Route = createFileRoute('/design-system/components/indicator')({
  component: IndicatorStory,
})
