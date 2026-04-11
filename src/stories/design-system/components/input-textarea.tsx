import { useState } from 'react'
import { InputTextarea } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const InputTextareaStory = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <Header title='Textarea' />

      <Section title='Default'>
        <InputTextarea className='max-w-80' value={value} onChange={setValue} />
      </Section>

      <Section title='Meta'>
        <InputTextarea
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
        <InputTextarea
          className='max-w-80'
          error='Lorem ipsum dolar sit amit'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Read Only'>
        <InputTextarea
          className='max-w-80'
          value={value}
          readOnly
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputTextarea
          className='max-w-80'
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>

      <Section title='Resize'>
        <InputTextarea
          className='max-w-80'
          resize='vertical'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Autosize'>
        <InputTextarea
          className='max-w-80'
          value={value}
          autosize
          onChange={setValue}
        />
      </Section>

      <Section title='Character Count'>
        <InputTextarea
          className='max-w-80'
          maxLength={200}
          value={value}
          onChange={setValue}
        />
      </Section>
    </>
  )
}
