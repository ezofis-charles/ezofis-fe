import { useState } from 'react'
import { InputNumber } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const InputNumberStory = () => {
  const [value, setValue] = useState<number | string>('')

  return (
    <>
      <Header title='Input Number' />

      <Section title='Default'>
        <InputNumber className='max-w-80' value={value} onChange={setValue} />
      </Section>

      <Section title='Meta'>
        <InputNumber
          className='max-w-80'
          description='Lorem ipsum dolar sit amit'
          label='Label'
          placeholder='Placeholder'
          tooltip='Lorem ipsum dolar sit amit'
          value={value}
          optional
          required
          onChange={setValue}
        />
      </Section>

      <Section title='Error'>
        <InputNumber
          className='max-w-80'
          error='Lorem ipsum dolar sit amit'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Clearable'>
        <InputNumber
          className='max-w-80'
          value={value}
          clearable
          onChange={setValue}
        />
      </Section>

      <Section title='Read Only'>
        <InputNumber
          className='max-w-80'
          value={value}
          readOnly
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputNumber
          className='max-w-80'
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>

      <Section title='Prefix'>
        <InputNumber
          className='max-w-80'
          prefix='$'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Suffix'>
        <InputNumber
          className='max-w-80'
          suffix='%'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Controls'>
        <InputNumber
          className='max-w-80'
          value={value}
          withControls
          onChange={setValue}
        />
      </Section>
    </>
  )
}
