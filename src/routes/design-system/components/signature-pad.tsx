import { createFileRoute } from '@tanstack/react-router'
import { SignaturePadStory } from '@/stories/design-system/components/signature-pad'

export const Route = createFileRoute('/design-system/components/signature-pad')(
  {
    component: SignaturePadStory,
  },
)
