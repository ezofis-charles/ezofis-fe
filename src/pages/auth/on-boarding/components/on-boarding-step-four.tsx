import type { Option } from '@/types/option'
import { Button } from '@/components/base/button'
import { InputRadioCard } from '@/components/base/inputs'
import { AnimatePop } from '@/pages/auth/animate-pop'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

const experienceOptions: Option[] = [
  {
    description: 'Just getting started.',
    id: 'Beginner',
    name: 'Beginner',
  },
  {
    description: 'Some workflows automated.',
    id: 'Intermediate',
    name: 'Intermediate',
  },
  {
    description: 'Department-level automation.',
    id: 'Advanced',
    name: 'Advanced',
  },
  {
    description: 'Company-wide automation.',
    id: 'Enterprise',
    name: 'Enterprise',
  },
]

export const OnBoardingStepFour = () => {
  const setStep = useOnBoardingStore((state) => state.setStep)
  const experience = useOnBoardingStore((state) => state.experience)
  const setExperience = useOnBoardingStore((state) => state.setExperience)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setStep('stepFive')
  }

  return (
    <AnimatePop
      description='How familiar are you with automation and workflows?'
      title='Your automation experience'
    >
      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='space-y-4'>
          {experienceOptions.map((option) => (
            <InputRadioCard
              checked={experience === option.id}
              description={option.description}
              key={option.id}
              label={option.name}
              onClick={() => setExperience(option.id)}
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
