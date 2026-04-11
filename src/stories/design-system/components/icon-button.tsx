import { ButtonIcon } from '@/components/base/button'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const IconButtonStory = () => {
  return (
    <>
      <Header title='Icon Button' />

      <Section title='Default'>
        <ButtonIcon icon='tabler:download' />
      </Section>

      <Section title='Colors'>
        <div className='flex flex-wrap items-center gap-2'>
          <ButtonIcon icon='tabler:download' />
          <ButtonIcon color='secondary' icon='tabler:download' />
          <ButtonIcon color='red' icon='tabler:download' />
          <ButtonIcon color='green' icon='tabler:download' />
          <ButtonIcon color='gray' icon='tabler:download' />
        </div>
      </Section>

      <Section title='Loading'>
        <ButtonIcon icon='tabler:download' loading />
      </Section>

      <Section title='Disabled'>
        <ButtonIcon icon='tabler:download' disabled />
      </Section>

      <Section title='Variants'>
        <div className='space-y-6'>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon icon='tabler:download' />
            <ButtonIcon icon='tabler:download' variant='outline' />
            <ButtonIcon icon='tabler:download' variant='subtle' />
            <ButtonIcon icon='tabler:download' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='secondary' icon='tabler:download' />
            <ButtonIcon
              color='secondary'
              icon='tabler:download'
              variant='outline'
            />
            <ButtonIcon
              color='secondary'
              icon='tabler:download'
              variant='subtle'
            />
            <ButtonIcon
              color='secondary'
              icon='tabler:download'
              variant='ghost'
            />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='red' icon='tabler:download' />
            <ButtonIcon color='red' icon='tabler:download' variant='outline' />
            <ButtonIcon color='red' icon='tabler:download' variant='subtle' />
            <ButtonIcon color='red' icon='tabler:download' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='green' icon='tabler:download' />
            <ButtonIcon
              color='green'
              icon='tabler:download'
              variant='outline'
            />
            <ButtonIcon color='green' icon='tabler:download' variant='subtle' />
            <ButtonIcon color='green' icon='tabler:download' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='gray' icon='tabler:download' />
            <ButtonIcon color='gray' icon='tabler:download' variant='outline' />
            <ButtonIcon color='gray' icon='tabler:download' variant='subtle' />
            <ButtonIcon color='gray' icon='tabler:download' variant='ghost' />
          </div>
        </div>
      </Section>

      <Section title='Sizes'>
        <div className='flex flex-wrap items-center gap-2'>
          <ButtonIcon icon='tabler:download' size='xs' />
          <ButtonIcon icon='tabler:download' size='sm' />
          <ButtonIcon icon='tabler:download' />
          <ButtonIcon icon='tabler:download' size='lg' />
          <ButtonIcon icon='tabler:download' size='xl' />
        </div>
      </Section>
    </>
  )
}
