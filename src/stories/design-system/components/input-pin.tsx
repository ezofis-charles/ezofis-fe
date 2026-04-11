import { useState } from 'react'
import { InputPin } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const InputPinStory = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <Header title='Input Pin' />

      <Section title='Default'>
        <InputPin className='w-80' value={value} onChange={setValue} />
      </Section>

      <Section title='Placeholder'>
        <InputPin
          className='w-80'
          placeholder='0'
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <InputPin className='w-80' value={value} disabled onChange={setValue} />
      </Section>

      <Section title='Error'>
        <InputPin className='w-80' value={value} error onChange={setValue} />
      </Section>

      <Section title='Length'>
        <InputPin
          className='w-80'
          length={6}
          value={value}
          onChange={setValue}
        />
      </Section>
    </>
  )
}
