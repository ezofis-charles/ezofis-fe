import { createFileRoute } from '@tanstack/react-router'
import { StepperStory } from '@/stories/design-system/components/stepper'

export const Route = createFileRoute('/design-system/components/stepper')({
  component: StepperStory,
})
