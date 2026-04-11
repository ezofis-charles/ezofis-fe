import { createFileRoute } from '@tanstack/react-router'
import { TooltipStory } from '@/stories/design-system/components/tooltip'

export const Route = createFileRoute('/design-system/components/tooltip')({
  component: TooltipStory,
})
