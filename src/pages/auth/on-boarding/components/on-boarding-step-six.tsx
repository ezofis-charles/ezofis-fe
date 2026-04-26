import type { Option } from '@/types/option'
import { Button } from '@/components/base/button'
import { InputRadioCard } from '@/components/base/inputs'
import { AnimatePop } from '@/pages/auth/animate-pop'
import useOnBoardingMutation from '../hooks/use-on-boarding-mutation'
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
  const setStep = useOnBoardingStore((state) => state.setStep)
  const formData = useOnBoardingStore((state) => state.formData)
  const updateFormData = useOnBoardingStore((state) => state.updateFormData)
  const { error, isError, isPending, mutate } = useOnBoardingMutation()

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    mutate()
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
              checked={formData.recommendation === option.id}
              description={option.description}
              key={option.id}
              label={option.name}
              onClick={() =>
                updateFormData({ recommendation: option.id as string })
              }
            />
          ))}
        </div>

        <Button
          className='w-full justify-center'
          disabled={isPending}
          label="Let's go"
          loading={isPending}
          size='lg'
          type='submit'
        />
      </form>

      <div className='-mt-4 space-y-2'>
        <Button
          className='w-full justify-center'
          color='gray'
          label='Back'
          size='lg'
          variant='ghost'
          onClick={() => setStep('stepFive')}
        />

        {isError && (
          <div className='text-center text-red-11'>{error?.message}</div>
        )}
      </div>
    </AnimatePop>
  )
}
