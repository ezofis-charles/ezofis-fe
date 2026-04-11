import { createFileRoute } from '@tanstack/react-router'
import { InputTextareaStory } from '@/stories/design-system/components/input-textarea'

export const Route = createFileRoute(
  '/design-system/components/input-textarea',
)({
  component: InputTextareaStory,
})
