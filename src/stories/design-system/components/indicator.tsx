import { Avatar } from '@/components/base/avatar'
import { Indicator } from '@/components/base/indicator'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const IndicatorStory = () => {
  return (
    <>
      <Header title='Indicator' />

      <Section title='Default'>
        <Indicator offset={5}>
          <Avatar initials='CH' />
        </Indicator>
      </Section>

      <Section title='Animate'>
        <Indicator offset={5} animate>
          <Avatar initials='CH' />
        </Indicator>
      </Section>

      <Section title='Color'>
        <div className='flex items-center gap-4'>
          <Indicator offset={5} animate>
            <Avatar initials='CH' />
          </Indicator>
          <Indicator color='secondary' offset={5} animate>
            <Avatar initials='CH' />
          </Indicator>
          <Indicator color='red' offset={5} animate>
            <Avatar initials='CH' />
          </Indicator>
        </div>
      </Section>
    </>
  )
}
