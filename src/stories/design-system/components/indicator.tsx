import { Icon } from '@/components/base/icon'
import { Indicator } from '@/components/base/indicator'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const IndicatorStory = () => {
  return (
    <>
      <Header title='Indicator' />

      <Section title='Default'>
        <Indicator offset={2}>
          <Icon name='tabler:bell' />
        </Indicator>
      </Section>

      <Section title='Animate'>
        <Indicator offset={2} animate>
          <Icon name='tabler:bell' />
        </Indicator>
      </Section>

      <Section title='Color'>
        <div className='flex items-center gap-4'>
          <Indicator offset={2} animate>
            <Icon name='tabler:bell' />
          </Indicator>
          <Indicator color='secondary' offset={2} animate>
            <Icon name='tabler:bell' />
          </Indicator>
          <Indicator color='red' offset={2} animate>
            <Icon name='tabler:bell' />
          </Indicator>
        </div>
      </Section>
    </>
  )
}
