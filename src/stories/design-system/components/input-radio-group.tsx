import { useState } from 'react'
import { InputRadioGroup } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

const options1 = [
  {
    id: '1',
    name: 'Option 1',
  },
  {
    id: '2',
    name: 'Option 2',
  },
  {
    id: '3',
    name: 'Option 3',
  },
]
const options2 = [
  {
    id: '1',
    name: 'Option 1',
  },
  {
    id: '2',
    name: 'Option 2',
  },
  {
    id: '3',
    name: 'Option 3',
  },
  {
    id: '4',
    name: 'Option 4',
  },
  {
    id: '5',
    name: 'Option 5',
  },
]
const options3 = [
  {
    description: 'Lorem ipsum dolar sit amit',
    id: '1',
    name: 'Option 1',
  },
  {
    description: 'Lorem ipsum dolar sit amit',
    id: '2',
    name: 'Option 2',
  },
  {
    description: 'Lorem ipsum dolar sit amit',
    id: '3',
    name: 'Option 3',
  },
]

export const InputRadioGroupStory = () => {
  const [value, setValue] = useState<null | string>(null)

  return (
    <>
      <Header title='Input Radio Group' />

      <Section title='Default'>
        <InputRadioGroup options={options1} value={value} onChange={setValue} />
      </Section>

      <Section title='Meta'>
        <InputRadioGroup
          className='max-w-80'
          description='Lorem ipsum dolar sit amit'
          label='Label'
          options={options1}
          tooltip='Lorem ipsum dolar sit amit'
          value={value}
          optional
          required
          onChange={setValue}
        />
      </Section>

      <Section title='Options Per Line'>
        <div className='max-w-96'>
          <InputRadioGroup
            options={options2}
            optionsPerLine={3}
            value={value}
            onChange={setValue}
          />
        </div>
      </Section>

      <Section title='Description'>
        <InputRadioGroup options={options3} value={value} onChange={setValue} />
      </Section>

      <Section title='Error'>
        <InputRadioGroup
          error='Lorem ipsum dolar sit emit'
          options={options1}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputRadioGroup
          options={options1}
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>
    </>
  )
}
