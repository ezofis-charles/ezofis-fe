import { createFileRoute } from '@tanstack/react-router'
import { MenuStory } from '@/stories/design-system/components/menu'

export const Route = createFileRoute('/design-system/components/menu')({
  component: MenuStory,
})
