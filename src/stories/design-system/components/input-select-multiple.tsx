import { useState } from 'react'
import type { Option } from '@/types/option'
import { InputSelectMultiple } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

const options1 = [
  {
    disabled: false,
    id: '1',
    name: 'Emily Johnson',
  },
  {
    disabled: false,
    id: '2',
    name: 'Michael Williams',
  },
  {
    disabled: false,
    id: '3',
    name: 'Sophia Brown',
  },
  {
    disabled: false,
    id: '4',
    name: 'James Davis',
  },
  {
    disabled: false,
    id: '5',
    name: 'Emma Miller',
  },
  {
    disabled: false,
    id: '6',
    name: 'Olivia Wilson',
  },
  {
    disabled: false,
    id: '7',
    name: 'Alexander Jones',
  },
  {
    disabled: false,
    id: '8',
    name: 'Ava Taylor',
  },
  {
    disabled: false,
    id: '9',
    name: 'Ethan Martinez',
  },
  {
    disabled: false,
    id: '10',
    name: 'Isabella Anderson',
  },
]
const options2 = [
  {
    description: 'emily.johnson@x.dummyjson.com',
    disabled: false,
    id: '1',
    name: 'Emily Johnson',
  },
  {
    description: 'michael.williams@x.dummyjson.com',
    disabled: false,
    id: '2',
    name: 'Michael Williams',
  },
  {
    description: 'sophia.brown@x.dummyjson.com',
    disabled: false,
    id: '3',
    name: 'Sophia Brown',
  },
  {
    description: 'james.davis@x.dummyjson.com',
    disabled: false,
    id: '4',
    name: 'James Davis',
  },
  {
    description: 'emma.miller@x.dummyjson.com',
    disabled: false,
    id: '5',
    name: 'Emma Miller',
  },
  {
    description: 'olivia.wilson@x.dummyjson.com',
    disabled: false,
    id: '6',
    name: 'Olivia Wilson',
  },
  {
    description: 'alexander.jones@x.dummyjson.com',
    disabled: false,
    id: '7',
    name: 'Alexander Jones',
  },
  {
    description: 'ava.taylor@x.dummyjson.com',
    disabled: false,
    id: '8',
    name: 'Ava Taylor',
  },
  {
    description: 'ethan.martinez@x.dummyjson.com',
    disabled: false,
    id: '9',
    name: 'Ethan Martinez',
  },
  {
    description: 'isabella.anderson@x.dummyjson.com',
    disabled: false,
    id: '10',
    name: 'Isabella Anderson',
  },
]
const options3 = [
  {
    disabled: false,
    id: '1',
    name: 'Emily Johnson',
  },
  {
    disabled: false,
    id: '2',
    name: 'Michael Williams',
  },
  {
    disabled: true,
    id: '3',
    name: 'Sophia Brown',
  },
  {
    disabled: false,
    id: '4',
    name: 'James Davis',
  },
  {
    disabled: false,
    id: '5',
    name: 'Emma Miller',
  },
  {
    disabled: true,
    id: '6',
    name: 'Olivia Wilson',
  },
  {
    disabled: false,
    id: '7',
    name: 'Alexander Jones',
  },
  {
    disabled: false,
    id: '8',
    name: 'Ava Taylor',
  },
  {
    disabled: true,
    id: '9',
    name: 'Ethan Martinez',
  },
  {
    disabled: false,
    id: '10',
    name: 'Isabella Anderson',
  },
]

export const InputSelectMultipleStory = () => {
  const [value, setValue] = useState<Option[]>([])

  return (
    <>
      <Header title='Input Select Multiple' />

      <Section title='Default'>
        <InputSelectMultiple
          className='max-w-80'
          options={options1}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Meta'>
        <InputSelectMultiple
          className='max-w-80'
          description='Lorem ipsum dolar sit amit'
          label='Label'
          options={options1}
          placeholder='Placeholder'
          tooltip='Lorem ipsum dolar sit amit'
          value={value}
          optional
          required
          onChange={setValue}
        />
      </Section>

      <Section title='With Description'>
        <InputSelectMultiple
          className='max-w-80'
          options={options2}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='With Disabled Options'>
        <InputSelectMultiple
          className='max-w-80'
          options={options3}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Searchable'>
        <InputSelectMultiple
          className='max-w-80'
          options={options1}
          value={value}
          searchable
          onChange={setValue}
        />
      </Section>

      <Section title='Creatable'>
        <InputSelectMultiple
          className='max-w-80'
          options={options1}
          value={value}
          creatable
          onChange={setValue}
        />
      </Section>

      <Section title='Error'>
        <InputSelectMultiple
          className='max-w-80'
          error='Lorem ipsum dolar sit amit'
          options={options1}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Clearable'>
        <InputSelectMultiple
          className='max-w-80'
          label='Label'
          options={options1}
          value={value}
          clearable
          onChange={setValue}
        />
      </Section>

      <Section title='Read Only'>
        <InputSelectMultiple
          className='max-w-80'
          options={options1}
          value={value}
          readOnly
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputSelectMultiple
          className='max-w-80'
          options={options1}
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>
    </>
  )
}
