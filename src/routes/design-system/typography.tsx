import { createFileRoute } from '@tanstack/react-router'
import { TypographyStory } from '@/stories/design-system/typography'

export const Route = createFileRoute('/design-system/typography')({
  component: TypographyStory,
})
