import { createFileRoute } from '@tanstack/react-router'
import { DrawerStory } from '@/stories/design-system/components/drawer'

export const Route = createFileRoute('/design-system/components/drawer')({
  component: DrawerStory,
})
