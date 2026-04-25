import { useEffect } from 'react'
import { OnBoardingStepFive } from './components/on-boarding-step-five'
import { OnBoardingStepFour } from './components/on-boarding-step-four'
import { OnBoardingStepOne } from './components/on-boarding-step-one'
import { OnBoardingStepSix } from './components/on-boarding-step-six'
import { OnBoardingStepThree } from './components/on-boarding-step-three'
import { OnBoardingStepTwo } from './components/on-boarding-step-two'
import { OnBoardingValidateLink } from './components/on-boarding-validate-link'
import { useOnBoardingStore } from './stores/use-on-boarding-store'

export const OnBoardingPage = () => {
  const step = useOnBoardingStore((state) => state.step)
  const setStep = useOnBoardingStore((state) => state.setStep)

  useEffect(() => {
    return () => setStep('validateLink')
  }, [setStep])

  return (
    <>
      {step === 'validateLink' && <OnBoardingValidateLink />}
      {step === 'stepOne' && <OnBoardingStepOne />}
      {step === 'stepTwo' && <OnBoardingStepTwo />}
      {step === 'stepThree' && <OnBoardingStepThree />}
      {step === 'stepFour' && <OnBoardingStepFour />}
      {step === 'stepFive' && <OnBoardingStepFive />}
      {step === 'stepSix' && <OnBoardingStepSix />}
    </>
  )
}
