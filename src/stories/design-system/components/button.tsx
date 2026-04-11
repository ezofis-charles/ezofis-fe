import { Button } from '@/components/base/button'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const ButtonStory = () => {
  return (
    <>
      <Header title='Button' />

      <Section title='Default'>
        <Button label='Button' />
      </Section>

      <Section title='Colors'>
        <div className='flex flex-wrap items-center gap-2'>
          <Button label='Button' />
          <Button color='secondary' label='Button' />
          <Button color='red' label='Button' />
          <Button color='green' label='Button' />
          <Button color='gray' label='Button' />
        </div>
      </Section>

      <Section title='Loading'>
        <Button label='Button' loading />
      </Section>

      <Section title='Disabled'>
        <Button label='Button' disabled />
      </Section>

      <Section title='With Icons'>
        <div className='flex flex-wrap items-center gap-2'>
          <Button icon='tabler:plus' label='Button' />
          <Button label='Button' suffixIcon='tabler:plus' />
        </div>
      </Section>

      <Section title='Variants'>
        <div className='space-y-6'>
          <div className='flex flex-wrap items-center gap-2'>
            <Button label='Button' />
            <Button label='Button' variant='outline' />
            <Button label='Button' variant='subtle' />
            <Button label='Button' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <Button color='secondary' label='Button' />
            <Button color='secondary' label='Button' variant='outline' />
            <Button color='secondary' label='Button' variant='subtle' />
            <Button color='secondary' label='Button' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <Button color='red' label='Button' />
            <Button color='red' label='Button' variant='outline' />
            <Button color='red' label='Button' variant='subtle' />
            <Button color='red' label='Button' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <Button color='green' label='Button' />
            <Button color='green' label='Button' variant='outline' />
            <Button color='green' label='Button' variant='subtle' />
            <Button color='green' label='Button' variant='ghost' />
          </div>
          <div className='flex flex-wrap items-center gap-2'>
            <Button color='gray' label='Button' />
            <Button color='gray' label='Button' variant='outline' />
            <Button color='gray' label='Button' variant='subtle' />
            <Button color='gray' label='Button' variant='ghost' />
          </div>
        </div>
      </Section>

      <Section title='Size'>
        <div className='flex flex-wrap items-center gap-2'>
          <Button label='Button' size='xs' />
          <Button label='Button' size='sm' />
          <Button label='Button' />
          <Button label='Button' size='lg' />
          <Button label='Button' size='xl' />
        </div>
      </Section>
    </>
  )
}
