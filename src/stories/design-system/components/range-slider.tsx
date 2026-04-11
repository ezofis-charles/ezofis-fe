import { useState } from 'react'
import { RangeSlider } from '@/components/base/range-slider'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const RangeSliderStory = () => {
  const [value, setValue] = useState<[number, number]>([20, 80])

  return (
    <>
      <Header title='Range Slider' />

      <Section title='Default'>
        <RangeSlider className='max-w-80' value={value} onChange={setValue} />
      </Section>

      <Section title='Min & Max'>
        <RangeSlider
          className='max-w-80'
          max={80}
          min={20}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Domain'>
        <RangeSlider
          className='max-w-80'
          domain={[0, 100]}
          max={80}
          min={20}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Marks'>
        <RangeSlider
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
        <RangeSlider
          className='max-w-80'
          minRange={20}
          step={20}
          value={value}
          onChange={setValue}
        />
      </Section>

      <Section title='Disabled'>
        <RangeSlider
          className='max-w-80'
          value={value}
          disabled
          onChange={setValue}
        />
      </Section>
    </>
  )
}
