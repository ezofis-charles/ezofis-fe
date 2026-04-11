import { useState } from 'react'
import { InputDate } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const InputDateStory = () => {
  const [value, setValue] = useState<null | string>(null)

  return (
    <>
      <Header title='Input Date' />

      <Section title='Default'>
        <InputDate className='max-w-80' value={value} onChange={setValue} />
      </Section>

      <Section title='Meta'>
        <InputDate
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
        <InputDate
          className='max-w-80'
          error='Lorem ipsum dolar sit amit'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Clearable'>
        <InputDate
          className='max-w-80'
          value={value}
          clearable
          onChange={setValue}
        />
      </Section>

      <Section title='Read Only'>
        <InputDate
          className='max-w-80'
          value={value}
          readOnly
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputDate
          className='max-w-80'
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>

      <Section title='Min Date'>
        <InputDate
          className='max-w-80'
          minDate='2025-04-01'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Max Date'>
        <InputDate
          className='max-w-80'
          maxDate='2025-10-30'
          value={value}
          onChange={setValue}
        />
      </Section>
    </>
  )
}
