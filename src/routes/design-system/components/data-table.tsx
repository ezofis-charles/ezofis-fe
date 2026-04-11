import { createFileRoute } from '@tanstack/react-router'
import { DataTableStory } from '@/stories/design-system/components/data-table'

export const Route = createFileRoute('/design-system/components/data-table')({
  component: DataTableStory,
})
