import { Divider } from '@/components/base/divider'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const DividerStory = () => {
  return (
    <>
      <Header title='Divider' />

      <Section title='Default'>
        <Divider />
      </Section>

      <Section title='With Label'>
        <div className='space-y-6'>
          <Divider label='Label' />
          <Divider label='Label' labelPosition='left' />
          <Divider label='Label' labelPosition='right' />
        </div>
      </Section>

      <Section title='Vertical'>
        <Divider className='h-10' orientation='vertical' />
      </Section>
    </>
  )
}
