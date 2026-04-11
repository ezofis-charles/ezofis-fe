import { createFileRoute } from '@tanstack/react-router'
import { SegmentGroupStory } from '@/stories/design-system/components/segment-group'

export const Route = createFileRoute('/design-system/components/segment-group')(
  {
    component: SegmentGroupStory,
  },
)
