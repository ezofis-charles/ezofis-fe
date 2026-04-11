import { createFileRoute } from '@tanstack/react-router'
import { ImageUploadStory } from '@/stories/design-system/components/image-upload'

export const Route = createFileRoute('/design-system/components/image-upload')({
  component: ImageUploadStory,
})
