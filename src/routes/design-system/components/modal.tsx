import { createFileRoute } from '@tanstack/react-router'
import { ModalStory } from '@/stories/design-system/components/modal'

export const Route = createFileRoute('/design-system/components/modal')({
  component: ModalStory,
})
