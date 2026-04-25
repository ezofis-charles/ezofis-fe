import { useState } from 'react'
import type { Option } from '@/types/option'
import { Button } from '@/components/base/button'
import { InputRadioCard } from '@/components/base/inputs'
import { AnimatePop } from '@/pages/auth/animate-pop'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

const automationExperienceOptions: Option[] = [
  {
    description: 'Just getting started (no automation yet).',
    id: 'beginner',
    name: 'Beginner',
  },
  {
    description: 'Some workflows automated (team-level).',
    id: 'intermediate',
    name: 'Intermediate',
  },
  {
    description: 'Department-level automation in place.',
    id: 'advanced',
    name: 'Advanced',
  },
  {
    description: 'Company-wide automation at scale.',
    id: 'enterprise',
    name: 'Enterprise',
  },
]

export const OnBoardingStepFour = () => {
  const setStep = useOnBoardingStore((state) => state.setStep)
  const setOnboardingData = useOnBoardingStore(
    (state) => state.setOnboardingData,
  )
  const [value, setValue] = useState<null | string>(null)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setOnboardingData('automationExperience', value || '')
    setStep('stepFive')
  }

  return (
    <AnimatePop
      description='How familiar are you with automation and workflows?'
      title='Your automation experience'
    >
      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='space-y-4'>
          {automationExperienceOptions.map((option) => (
            <InputRadioCard
              checked={value === option.id}
              description={option.description}
              key={option.id}
              label={option.name}
              onClick={() => setValue(option.id)}
            />
          ))}
        </div>

        <Button
          className='w-full justify-center'
          label='Continue'
          size='lg'
          type='submit'
        />
      </form>
    </AnimatePop>
  )
}
