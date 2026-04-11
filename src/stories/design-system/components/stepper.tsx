import { useState } from 'react'
import { Stepper } from '@/components/base/stepper'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

const steps = [
  { id: 1, label: 'Secure Your Account' },
  { id: 2, label: 'Tell Us About You' },
  { id: 3, label: 'What Best Describes You?' },
  { id: 4, label: 'What Would You Like to Achieve?' },
]

export const StepperStory = () => {
  const [active, setActive] = useState(1)

  return (
    <>
      <Header title='Stepper' />

      <Section title='Default'>
        <Stepper active={active} steps={steps} setActive={setActive} />
      </Section>

      <Section title='With Description'>
        <Stepper
          active={active}
          steps={steps.map((step) => ({
            ...step,
            description: `Step ${step.id}`,
          }))}
          setActive={setActive}
        />
      </Section>

      <Section title='Disabled'>
        <Stepper
          active={active}
          steps={steps.map((step) => ({ ...step, disabled: step.id === 3 }))}
          setActive={setActive}
        />
      </Section>

      <Section title='Loading'>
        <Stepper
          active={active}
          steps={steps.map((step) => ({ ...step, loading: step.id === 3 }))}
          setActive={setActive}
        />
      </Section>

      <Section title='Vertical'>
        <Stepper
          active={active}
          orientation='vertical'
          steps={steps}
          setActive={setActive}
        />
      </Section>
    </>
  )
}
