import { Icon } from '@/components/base/icon'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const IconStory = () => {
  return (
    <>
      <Header title='Icon' />

      <Section title='Default'>
        <Icon name='tabler:trash' />
      </Section>

      <Section title='Color'>
        <div className='flex items-center gap-2'>
          <Icon className='text-primary-9' name='tabler:trash' />
          <Icon className='text-secondary-9' name='tabler:trash' />
          <Icon className='text-red-9' name='tabler:trash' />
          <Icon className='text-green-9' name='tabler:trash' />
        </div>
      </Section>

      <Section title='Size'>
        <Icon className='size-8 xl:size-8' name='tabler:trash' />
      </Section>
    </>
  )
}
