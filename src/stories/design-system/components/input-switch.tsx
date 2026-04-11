import { useState } from 'react'
import { InputSwitch } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const InputSwitchStory = () => {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <Header title='Input Switch' />

      <Section title='Default'>
        <InputSwitch checked={checked} label='Label' onChange={setChecked} />
      </Section>

      <Section title='Description'>
        <InputSwitch
          checked={checked}
          description='Lorem ipsum dolar sit amit'
          label='Label'
          onChange={setChecked}
        />
      </Section>

      <Section title='Error'>
        <InputSwitch
          checked={checked}
          error='Error'
          label='Label'
          onChange={setChecked}
        />
      </Section>

      <Section title='Disabled'>
        <InputSwitch
          checked={checked}
          label='Label'
          disabled
          onChange={setChecked}
        />
      </Section>
    </>
  )
}
