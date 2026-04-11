import { createFileRoute } from '@tanstack/react-router'
import { QrCodeStory } from '@/stories/design-system/components/qr-code'

export const Route = createFileRoute('/design-system/components/qr-code')({
  component: QrCodeStory,
})
