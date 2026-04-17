import { useRouter } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'

export const OnBoardingStepFive = () => {
  const router = useRouter()

  const handleContinue = () => {
    router.navigate({ to: '/' })
  }

  const handleSkip = () => {
    router.navigate({ to: '/' })
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='Ezofis is an AI-first workflow platform. Design, automate, and orchestrate processes that adapt and improve over time.'
        level={1}
        title='Step Five'
      />

      <div className='space-y-2'>
        <Button
          className='w-full justify-center'
          label='Get Started'
          size='lg'
          onClick={handleContinue}
        />

        <Button
          className='w-full justify-center font-normal text-gray-11 hover:bg-transparent hover:underline'
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
