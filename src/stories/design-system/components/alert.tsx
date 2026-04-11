import { Alert } from '@/components/base/alert'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const AlertStory = () => {
  return (
    <>
      <Header title='Alert' />

      <Section title='Default'>
        <Alert text='Lorem ipsum dolar sit amit.' />
      </Section>

      <Section title='Colors'>
        <div className='space-y-4'>
          <Alert color='secondary' text='Lorem ipsum dolar sit amit.' />
          <Alert color='green' text='Lorem ipsum dolar sit amit.' />
          <Alert color='red' text='Lorem ipsum dolar sit amit.' />
        </div>
      </Section>
    </>
  )
}
