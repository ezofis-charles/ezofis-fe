import { useEffect } from 'react'
import type { OnBoardingStep } from './stores/use-on-boarding-store'
import { OnBoardingStepFive } from './components/on-boarding-step-five'
import { OnBoardingStepFour } from './components/on-boarding-step-four'
import { OnBoardingStepIndicator } from './components/on-boarding-step-indicator'
import { OnBoardingStepOne } from './components/on-boarding-step-one'
import { OnBoardingStepSix } from './components/on-boarding-step-six'
import { OnBoardingStepThree } from './components/on-boarding-step-three'
import { OnBoardingStepTwo } from './components/on-boarding-step-two'
import { OnBoardingValidateLink } from './components/on-boarding-validate-link'
import { useOnBoardingStore } from './stores/use-on-boarding-store'

const STEP_COMPONENTS: Record<OnBoardingStep, React.ComponentType> = {
  stepFive: OnBoardingStepFive,
  stepFour: OnBoardingStepFour,
  stepOne: OnBoardingStepOne,
  stepSix: OnBoardingStepSix,
  stepThree: OnBoardingStepThree,
  stepTwo: OnBoardingStepTwo,
  validateLink: OnBoardingValidateLink,
}

export const OnBoardingPage = () => {
  const step = useOnBoardingStore((state) => state.step)
  const resetStore = useOnBoardingStore((state) => state.resetStore)

  useEffect(() => {
    return () => resetStore()
  }, [resetStore])

  const StepComponent = STEP_COMPONENTS[step]

  return (
    <>
      {StepComponent && <StepComponent />}
      {step !== 'validateLink' && step !== 'stepOne' && (
        <OnBoardingStepIndicator />
      )}
    </>
  )
}
