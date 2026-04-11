import { IconAI } from '@/components/base/icon'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const AiIconStory = () => {
  return (
    <>
      <Header title='AI Icon' />

      <Section title='Default'>
        <IconAI className='size-9' />
      </Section>

      <Section title='Animate'>
        <IconAI className='size-9' animate />
      </Section>

      <Section title='Colors'>
        <div className='flex items-center gap-2'>
          <IconAI className='size-9' color='primary' />
          <IconAI className='size-9' color='secondary' />
        </div>
      </Section>
    </>
  )
}
