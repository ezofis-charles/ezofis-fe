import { useState } from 'react'
import { Icon } from '@/components/base/icon'
import { InputText } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const InputTextStory = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <Header title='Input Text' />

      <Section title='Default'>
        <InputText className='max-w-80' value={value} onChange={setValue} />
      </Section>

      <Section title='Size'>
        <div className='max-w-80 space-y-4'>
          <InputText label='Default' value={value} onChange={setValue} />
          <InputText
            label='Medium'
            size='md'
            value={value}
            onChange={setValue}
          />
        </div>
      </Section>

      <Section title='Meta'>
        <InputText
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
        <InputText
          className='max-w-80'
          error='Lorem ipsum dolar sit amit'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Clearable'>
        <InputText
          className='max-w-80'
          value={value}
          clearable
          onChange={setValue}
        />
      </Section>

      <Section title='Read Only'>
        <InputText
          className='max-w-80'
          value={value}
          readOnly
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputText
          className='max-w-80'
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>

      <Section title='Left Section'>
        <InputText
          className='max-w-80'
          leftSection={<Icon className='text-gray-9' name='tabler:search' />}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Right Section'>
        <InputText
          className='max-w-80'
          rightSection={<Icon className='text-gray-9' name='tabler:calendar' />}
          rightSectionPointerEvents='auto'
          value={value}
          onChange={setValue}
        />
      </Section>
    </>
  )
}
