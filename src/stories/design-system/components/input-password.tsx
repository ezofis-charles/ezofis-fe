import { useState } from 'react'
import { Icon } from '@/components/base/icon'
import { InputPassword } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const InputPasswordStory = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <Header title='Input Password' />

      <Section title='Default'>
        <InputPassword className='max-w-80' value={value} onChange={setValue} />
      </Section>

      <Section title='Meta'>
        <InputPassword
          className='max-w-80'
          description='Lorem ipsum dolar sit amit'
          label='Label'
          tooltip='Lorem ipsum dolar sit amit'
          value={value}
          optional
          required
          onChange={setValue}
        />
      </Section>

      <Section title='Error'>
        <InputPassword
          className='max-w-80'
          error='Lorem ipsum dolar sit amit'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputPassword
          className='max-w-80'
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>

      <Section title='Left Section'>
        <InputPassword
          className='max-w-80'
          leftSection={<Icon className='text-gray-9' name='tabler:lock' />}
          value={value}
          onChange={setValue}
        />
      </Section>
    </>
  )
}
