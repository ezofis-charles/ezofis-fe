import { createFileRoute } from '@tanstack/react-router'
import { SliderStory } from '@/stories/design-system/components/slider'

export const Route = createFileRoute('/design-system/components/slider')({
  component: SliderStory,
})
