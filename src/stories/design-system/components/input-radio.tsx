import { useState } from 'react'
import { InputRadio } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const InputRadioStory = () => {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Header title='Input Radio' />

      <Section title='Default'>
        <InputRadio checked={checked} label='Label' onChange={setChecked} />
      </Section>

      <Section title='Description'>
        <InputRadio
          checked={checked}
          description='Lorem ipsum dolar sit amit'
          label='Label'
          onChange={setChecked}
        />
      </Section>

      <Section title='Error'>
        <InputRadio
          checked={checked}
          error='Error'
          label='Label'
          onChange={setChecked}
        />
      </Section>

      <Section title='Disabled'>
        <InputRadio
          checked={checked}
          label='Label'
          disabled
          onChange={setChecked}
        />
      </Section>
    </>
  )
}
