import { useSearch } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { USER_AUTH_METHOD } from '@/types/user'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

export const OnBoardingStepOne = () => {
  const { auth } = useSearch({ from: '/_auth/on-boarding' })
  const setStep = useOnBoardingStore((state) => state.setStep)

  const handleContinue = () => {
    setStep(auth === USER_AUTH_METHOD.enum.email ? 'stepTwo' : 'stepThree')
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='Ezofis is an AI-first workflow platform. Design, automate, and orchestrate processes that adapt and improve over time.'
        level={1}
        title='Welcome to Ezofis'
      />

      <Button
        className='w-full justify-center'
        label='Continue'
        size='lg'
        onClick={handleContinue}
      />
    </AnimatePop>
  )
}
