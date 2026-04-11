import { createFileRoute } from '@tanstack/react-router'
import { ColorsStory } from '@/stories/design-system/colors'

export const Route = createFileRoute('/design-system/colors')({
  component: ColorsStory,
})
