import { createFileRoute } from '@tanstack/react-router'
import { InputSelectStory } from '@/stories/design-system/components/input-select'

export const Route = createFileRoute('/design-system/components/input-select')({
  component: InputSelectStory,
})
