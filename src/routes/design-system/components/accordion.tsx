import { createFileRoute } from '@tanstack/react-router'
import { AccordionStory } from '@/stories/design-system/components/accordion'

export const Route = createFileRoute('/design-system/components/accordion')({
  component: AccordionStory,
})
