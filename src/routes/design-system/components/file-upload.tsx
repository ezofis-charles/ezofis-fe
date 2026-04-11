import { createFileRoute } from '@tanstack/react-router'
import { FileUploadStory } from '@/stories/design-system/components/file-upload'

export const Route = createFileRoute('/design-system/components/file-upload')({
  component: FileUploadStory,
})
