import { useState } from 'react'
import { Slider } from '@/components/base/slider'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const SliderStory = () => {
  const [value, setValue] = useState(50)

  return (
    <>
      <Header title='Slider' />

      <Section title='Default'>
        <Slider className='max-w-80' value={value} onChange={setValue} />
      </Section>

      <Section title='Min & Max'>
        <Slider
          className='max-w-80'
          max={80}
          min={20}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Domain'>
        <Slider
          className='max-w-80'
          domain={[0, 100]}
          max={80}
          min={20}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Marks'>
        <Slider
          className='max-w-80'
          value={value}
          marks={[
            { label: '0', value: 0 },
            { label: '20', value: 20 },
            { label: '40', value: 40 },
            { label: '60', value: 60 },
            { label: '80', value: 80 },
            { label: '100', value: 100 },
          ]}
          onChange={setValue}
        />
      </Section>

      <Section title='Step'>
        <Slider
          className='max-w-80'
          step={25}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <Slider
          className='max-w-80'
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>
    </>
  )
}
