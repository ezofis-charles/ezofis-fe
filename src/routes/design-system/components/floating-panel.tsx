import { createFileRoute } from '@tanstack/react-router'
import { FloatingPanelStory } from '@/stories/design-system/components/floating-panel'

export const Route = createFileRoute(
  '/design-system/components/floating-panel',
)({
  component: FloatingPanelStory,
})
