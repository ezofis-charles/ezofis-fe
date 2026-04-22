import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

export const OnBoardingStepThree = () => {
  const setStep = useOnBoardingStore((state) => state.setStep)

  const handleContinue = () => {
    setStep('stepFour')
  }

  const handleSkip = () => {
    setStep('stepFour')
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='Ezofis is an AI-first workflow platform. Design, automate, and orchestrate processes that adapt and improve over time.'
        level={1}
        title='Step Three'
      />

      <div className='space-y-2'>
        <Button
          className='w-full justify-center'
          label='Continue'
          size='lg'
          onClick={handleContinue}
        />

        <Button
          className='w-full justify-center font-normal text-gray hover:bg-transparent hover:underline'
          color='gray'
          label='Skip for now'
          size='lg'
          variant='ghost'
          onClick={handleSkip}
        />
      </div>
    </AnimatePop>
  )
}
