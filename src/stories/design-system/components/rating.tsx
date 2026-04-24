import { useState } from 'react'
import { Icon } from '@/components/base/icon'
import { Rating } from '@/components/base/rating'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const RatingStory = () => {
  const [value, setValue] = useState(0)

  return (
    <>
      <Header title='Rating' />

      <Section title='Default'>
        <Rating value={value} onChange={setValue} />
      </Section>

      <Section title='Allow Half'>
        <Rating value={value} allowHalf onChange={setValue} />
      </Section>

      <Section title='Count'>
        <Rating count={10} value={value} onChange={setValue} />
      </Section>

      <Section title='Size'>
        <div className='space-y-4'>
          <Rating size={20} value={value} onChange={setValue} />
          <Rating size={40} value={value} onChange={setValue} />
        </div>
      </Section>

      <Section title='Error'>
        <Rating value={value} error onChange={setValue} />
      </Section>

      <Section title='Disabled'>
        <Rating value={value} disabled onChange={setValue} />
      </Section>

      <Section title='Custom Icon'>
        <Rating
          value={value}
          emptyIcon={
            <Icon className='size-8 text-gray-4' name='tabler:heart-filled' />
          }
          fullIcon={
            <Icon className='size-8 text-red-9' name='tabler:heart-filled' />
          }
          onChange={setValue}
        />
      </Section>
    </>
  )
}
