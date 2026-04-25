import { useRouter } from '@tanstack/react-router'
import type { Option } from '@/types/option'
import { Button } from '@/components/base/button'
import { InputRadioCard } from '@/components/base/inputs'
import { AnimatePop } from '@/pages/auth/animate-pop'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

const recommendations: Option[] = [
  {
    description: 'Use a pre-built invoice template.',
    id: 'Automate invoice processing',
    name: 'Automate invoice processing',
  },
  {
    description: 'Automate your new hire experience.',
    id: 'Build an employee onboarding flow',
    name: 'Build an employee onboarding flow',
  },
  {
    description: 'See ezofis in action.',
    id: 'Take the interactive tour',
    name: 'Take the interactive tour',
  },
  {
    description: 'Explore industry-ready workflows.',
    id: 'Browse the template gallery',
    name: 'Browse the template gallery',
  },
]

export const OnBoardingStepSix = () => {
  const recommendation = useOnBoardingStore((state) => state.recommendation)
  const setRecommendation = useOnBoardingStore(
    (state) => state.setRecommendation,
  )
  const router = useRouter()

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    router.navigate({ to: '/' })
  }

  return (
    <AnimatePop
      description="Here's where we suggest starting."
      title="You're almost ready"
    >
      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='space-y-4'>
          {recommendations.map((option) => (
            <InputRadioCard
              checked={recommendation === option.id}
              description={option.description}
              key={option.id}
              label={option.name}
              onClick={() => setRecommendation(option.id)}
            />
          ))}
        </div>

        <Button
          className='w-full justify-center'
          label="Let's go"
          size='lg'
          type='submit'
        />
      </form>
    </AnimatePop>
  )
}
