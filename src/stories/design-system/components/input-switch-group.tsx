import { useState } from 'react'
import { InputSwitchGroup } from '@/components/base/inputs'
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

export const InputSwitchGroupStory = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <>
      <Header title='Input Switch Group' />

      <Section title='Default'>
        <InputSwitchGroup
          options={options1}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Meta'>
        <InputSwitchGroup
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
          <InputSwitchGroup
            options={options2}
            optionsPerLine={3}
            value={value}
            onChange={setValue}
          />
        </div>
      </Section>

      <Section title='Description'>
        <InputSwitchGroup
          options={options3}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Error'>
        <InputSwitchGroup
          error='Lorem ipsum dolar sit emit'
          options={options1}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputSwitchGroup
          options={options1}
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>
    </>
  )
}
