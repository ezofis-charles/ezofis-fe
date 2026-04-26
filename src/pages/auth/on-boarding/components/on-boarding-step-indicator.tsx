import { useSearch } from '@tanstack/react-router'
import { Progress } from '@/components/base/progress'
import {
  getVisibleSteps,
  useOnBoardingStore,
} from '../stores/use-on-boarding-store'

export const OnBoardingStepIndicator = () => {
  const { authMethod } = useSearch({ from: '/_auth/on-boarding' })
  const step = useOnBoardingStore((state) => state.step)

  const visibleSteps = getVisibleSteps(authMethod)
  const currentStepIndex = visibleSteps.indexOf(step)

  const progress =
    currentStepIndex === -1
      ? 0
      : ((currentStepIndex + 1) / visibleSteps.length) * 100

  return (
    <Progress
      animated={step !== 'stepSix'}
      className='fixed top-0 right-0 w-full bg-surface'
      rounded={false}
      size={4}
      value={progress}
    />
  )
}
