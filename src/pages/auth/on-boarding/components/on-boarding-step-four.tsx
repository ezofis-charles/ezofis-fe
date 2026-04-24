import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

export const OnBoardingStepFour = () => {
  const setStep = useOnBoardingStore((state) => state.setStep)

  const handleContinue = () => {
    setStep('stepFive')
  }

  const handleSkip = () => {
    setStep('stepFive')
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='How familiar are you with automation and workflows?'
        level={1}
        title='Your automation experience'
      />

      <div className='space-y-2'>
        <Button
          className='w-full justify-center'
          label='Continue'
          size='lg'
          onClick={handleContinue}
        />

        <Button
          className='w-full justify-center text-gray-11 hover:bg-transparent hover:underline'
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
