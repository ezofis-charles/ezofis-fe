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
  const formData = useOnBoardingStore((state) => state.formData)
  const updateFormData = useOnBoardingStore((state) => state.updateFormData)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setStep('stepFive')
  }

  return (
    <AnimatePop
      description='How familiar are you with workflows?'
      title='Automation experience'
    >
      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='space-y-4'>
          {experienceOptions.map((option) => (
            <InputRadioCard
              checked={formData.experience === option.id}
              description={option.description}
              key={option.id}
              label={option.name}
              onClick={() =>
                updateFormData({ experience: option.id as string })
              }
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

      <Button
        className='-mt-4 w-full justify-center'
        color='gray'
        label='Back'
        size='lg'
        variant='ghost'
        onClick={() => setStep('stepThree')}
      />
    </AnimatePop>
  )
}
