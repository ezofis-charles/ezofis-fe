import { useState } from 'react'
import { InputCheckboxCard } from '@/components/base/inputs'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const InputCheckboxCardStory = () => {
  const [selected, setSelected] = useState<number[]>([])

  const handleClick = (value: number) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value))
    } else {
      setSelected([...selected, value])
    }
  }

  return (
    <>
      <Header title='Input Radio Card' />

      <Section title='Default'>
        <div className='max-w-80'>
          <InputCheckboxCard
            checked={selected.includes(1)}
            label='Label'
            onClick={() => handleClick(1)}
          />
        </div>
      </Section>

      <Section title='With Description'>
        <div className='max-w-80'>
          <InputCheckboxCard
            checked={selected.includes(1)}
            description='Lorem ipsum dolor sit consectetur'
            label='Label'
            onClick={() => handleClick(1)}
          />
        </div>
      </Section>

      <Section title='With Icon'>
        <div className='max-w-80'>
          <InputCheckboxCard
            checked={selected.includes(1)}
            description='Lorem ipsum dolor sit'
            icon='tabler:smartphone'
            label='Label'
            onClick={() => handleClick(1)}
          />
        </div>
      </Section>

      <Section title='Disabled'>
        <div className='max-w-80'>
          <InputCheckboxCard
            checked={selected.includes(1)}
            label='Label'
            disabled
            onClick={() => handleClick(1)}
          />
        </div>
      </Section>

      <Section title='Group'>
        <div className='max-w-80 space-y-4'>
          {[1, 2, 3].map((item) => (
            <InputCheckboxCard
              checked={selected.includes(item)}
              description='Lorem ipsum dolor sit consectetur'
              key={item}
              label={'Label ' + item}
              onClick={() => handleClick(item)}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
