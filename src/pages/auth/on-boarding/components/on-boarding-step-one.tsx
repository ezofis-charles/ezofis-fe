import { useSearch } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { AnimatePop } from '@/pages/auth/animate-pop'
import { USER_AUTH_METHOD } from '@/types/user'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

export const OnBoardingStepOne = () => {
  const { authMethod } = useSearch({ from: '/_auth/on-boarding' })
  const setStep = useOnBoardingStore((state) => state.setStep)

  const handleContinue = () => {
    setStep(
      authMethod === USER_AUTH_METHOD.enum.email ? 'stepTwo' : 'stepThree',
    )
  }

  return (
    <AnimatePop
      description="Build, automate, and scale your workflows with AI-powered precision. We'll set things up in a few quick steps so you can start creating smarter workflows right away."
      title='Welcome to ezofis'
    >
      <Button
        className='w-full justify-center'
        label='Get started'
        size='lg'
        onClick={handleContinue}
      />
    </AnimatePop>
  )
}
