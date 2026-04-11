import { createFileRoute } from '@tanstack/react-router'
import { InputSelectMultipleStory } from '@/stories/design-system/components/input-select-multiple'

export const Route = createFileRoute(
  '/design-system/components/input-select-multiple',
)({
  component: InputSelectMultipleStory,
})
