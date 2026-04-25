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
  const challenges = useOnBoardingStore((state) => state.challenges)
  const setChallenges = useOnBoardingStore((state) => state.setChallenges)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setStep('stepSix')
  }

  const handleSelectChallenge = (challenge: string) => {
    const isSelected = challenges.includes(challenge)
    if (isSelected) {
      setChallenges(challenges.filter((c) => c !== challenge))
    } else {
      setChallenges([...challenges, challenge])
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
              checked={challenges.includes(option)}
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
    </AnimatePop>
  )
}
