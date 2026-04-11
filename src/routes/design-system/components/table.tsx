import { createFileRoute } from '@tanstack/react-router'
import { TableStory } from '@/stories/design-system/components/table'

export const Route = createFileRoute('/design-system/components/table')({
  component: TableStory,
})
