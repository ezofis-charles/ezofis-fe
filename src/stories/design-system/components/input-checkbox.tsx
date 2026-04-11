import { useState } from 'react'
import { InputCheckbox } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const InputCheckboxStory = () => {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Header title='Input Checkbox' />

      <Section title='Default'>
        <InputCheckbox checked={checked} label='Label' onChange={setChecked} />
      </Section>

      <Section title='Description'>
        <InputCheckbox
          checked={checked}
          description='Lorem ipsum dolar sit amit'
          label='Label'
          onChange={setChecked}
        />
      </Section>

      <Section title='Error'>
        <InputCheckbox
          checked={checked}
          error='Error'
          label='Label'
          onChange={setChecked}
        />
      </Section>

      <Section title='Disabled'>
        <InputCheckbox
          checked={checked}
          label='Label'
          disabled
          onChange={setChecked}
        />
      </Section>

      <Section title='Indeterminate'>
        <InputCheckbox
          checked={checked}
          label='Label'
          indeterminate
          onChange={setChecked}
        />
      </Section>
    </>
  )
}
