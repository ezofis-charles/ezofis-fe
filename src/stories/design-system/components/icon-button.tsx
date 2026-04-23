import { ButtonIcon } from '@/components/base/button'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const IconButtonStory = () => {
  return (
    <>
      <Header title='Icon Button' />

      <Section title='Default'>
        <ButtonIcon icon='tabler:trash' />
      </Section>

      <Section title='Colors'>
        <div className='flex flex-wrap items-center gap-2'>
          <ButtonIcon icon='tabler:trash' />
          <ButtonIcon color='secondary' icon='tabler:trash' />
          <ButtonIcon color='red' icon='tabler:trash' />
          <ButtonIcon color='green' icon='tabler:trash' />
          <ButtonIcon color='gray' icon='tabler:trash' />
        </div>
      </Section>

      <Section title='Loading'>
        <ButtonIcon icon='tabler:trash' loading />
      </Section>

      <Section title='Disabled'>
        <ButtonIcon icon='tabler:trash' disabled />
      </Section>

      <Section title='Variants'>
        <div className='space-y-6'>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon icon='tabler:trash' />
            <ButtonIcon icon='tabler:trash' variant='outline' />
            <ButtonIcon icon='tabler:trash' variant='subtle' />
            <ButtonIcon icon='tabler:trash' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='secondary' icon='tabler:trash' />
            <ButtonIcon
              color='secondary'
              icon='tabler:trash'
              variant='outline'
            />
            <ButtonIcon
              color='secondary'
              icon='tabler:trash'
              variant='subtle'
            />
            <ButtonIcon color='secondary' icon='tabler:trash' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='red' icon='tabler:trash' />
            <ButtonIcon color='red' icon='tabler:trash' variant='outline' />
            <ButtonIcon color='red' icon='tabler:trash' variant='subtle' />
            <ButtonIcon color='red' icon='tabler:trash' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='green' icon='tabler:trash' />
            <ButtonIcon color='green' icon='tabler:trash' variant='outline' />
            <ButtonIcon color='green' icon='tabler:trash' variant='subtle' />
            <ButtonIcon color='green' icon='tabler:trash' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <ButtonIcon color='gray' icon='tabler:trash' />
            <ButtonIcon color='gray' icon='tabler:trash' variant='outline' />
            <ButtonIcon color='gray' icon='tabler:trash' variant='subtle' />
            <ButtonIcon color='gray' icon='tabler:trash' variant='ghost' />
          </div>
        </div>
      </Section>

      <Section title='Sizes'>
        <div className='flex flex-wrap items-center gap-2'>
          <ButtonIcon icon='tabler:trash' size='xs' />
          <ButtonIcon icon='tabler:trash' size='sm' />
          <ButtonIcon icon='tabler:trash' />
          <ButtonIcon icon='tabler:trash' size='lg' />
        </div>
      </Section>
    </>
  )
}
