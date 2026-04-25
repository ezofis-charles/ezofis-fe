import { useRouter } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { AnimatePop } from '@/pages/auth/animate-pop'

export const OnBoardingStepFive = () => {
  const router = useRouter()

  const handleContinue = () => {
    router.navigate({ to: '/' })
  }

  const handleSkip = () => {
    router.navigate({ to: '/' })
  }

  return (
    <AnimatePop
      description='Select the areas where you need the most help.'
      title='Business challenges'
    >
      <div className='space-y-2'>
        <Button
          className='w-full justify-center'
          label='Get Started'
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
