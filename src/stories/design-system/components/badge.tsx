import { Badge } from '@/components/base/badge'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const BadgeStory = () => {
  return (
    <>
      <Header title='Badge' />

      <Section title='Default'>
        <Badge label='Badge' />
      </Section>

      <Section title='Colors'>
        <div className='flex flex-wrap items-center gap-2'>
          <Badge label='Badge' />
          <Badge color='primary' label='Badge' />
          <Badge color='secondary' label='Badge' />
          <Badge color='red' label='Badge' />
          <Badge color='green' label='Badge' />
          <Badge color='blue' label='Badge' />
          <Badge color='yellow' label='Badge' />
          <Badge color='orange' label='Badge' />
          <Badge color='violet' label='Badge' />
          <Badge color='indigo' label='Badge' />
          <Badge color='pink' label='Badge' />
          <Badge color='bronze' label='Badge' />
          <Badge color='gold' label='Badge' />
        </div>
      </Section>
    </>
  )
}
