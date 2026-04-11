import { createFileRoute } from '@tanstack/react-router'
import { ButtonStory } from '@/stories/design-system/components/button'

export const Route = createFileRoute('/design-system/components/button')({
  component: ButtonStory,
})
