import { createFileRoute } from '@tanstack/react-router'
import { PaginationStory } from '@/stories/design-system/components/pagination'

export const Route = createFileRoute('/design-system/components/pagination')({
  component: PaginationStory,
})
