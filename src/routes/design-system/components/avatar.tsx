import { createFileRoute } from '@tanstack/react-router'
import { AvatarStory } from '@/stories/design-system/components/avatar'

export const Route = createFileRoute('/design-system/components/avatar')({
  component: AvatarStory,
})
