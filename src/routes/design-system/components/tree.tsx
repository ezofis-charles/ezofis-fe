import { createFileRoute } from '@tanstack/react-router'
import { TreeStory } from '@/stories/design-system/components/tree'

export const Route = createFileRoute('/design-system/components/tree')({
  component: TreeStory,
})
