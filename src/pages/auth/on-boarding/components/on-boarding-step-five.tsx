import { Button } from '@/components/base/button'
import { InputCheckboxCard } from '@/components/base/inputs'
import { AnimatePop } from '@/pages/auth/animate-pop'
import { useOnBoardingStore } from '../stores/use-on-boarding-store'

const challengeOptions = [
  'Slow, manual processes',
  'Disconnected systems and data silos',
  'Scaling operations efficiently',
  'Compliance and audit readiness',
  'Poor team collaboration',
  'High costs and recurring errors',
]

export const OnBoardingStepFive = () => {
  const setStep = useOnBoardingStore((state) => state.setStep)
  const formData = useOnBoardingStore((state) => state.formData)
  const updateFormData = useOnBoardingStore((state) => state.updateFormData)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setStep('stepSix')
  }

  const handleSelectChallenge = (challenge: string) => {
    const isSelected = formData.challenges.includes(challenge)
    if (isSelected) {
      updateFormData({
        challenges: formData.challenges.filter((c) => c !== challenge),
      })
    } else {
      updateFormData({
        challenges: [...formData.challenges, challenge],
      })
    }
  }

  return (
    <AnimatePop
      description='Pick the areas where you need the most help.'
      title='Business challenges'
    >
      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='space-y-4'>
          {challengeOptions.map((option) => (
            <InputCheckboxCard
              checked={formData.challenges.includes(option)}
              key={option}
              label={option}
              onClick={() => handleSelectChallenge(option)}
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
        onClick={() => setStep('stepFour')}
      />
    </AnimatePop>
  )
}
