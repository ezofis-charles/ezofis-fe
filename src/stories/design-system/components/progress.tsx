import { Progress } from '@/components/base/progress'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const ProgressStory = () => {
  return (
    <>
      <Header title='Progress' />

      <Section title='Default'>
        <Progress className='max-w-80' value={50} />
      </Section>

      <Section title='Striped'>
        <Progress className='max-w-80' value={50} striped />
      </Section>

      <Section title='Animated'>
        <Progress className='max-w-80' value={50} animated />
      </Section>

      <Section title='Colors'>
        <div className='max-w-80 space-y-4'>
          <Progress value={50} />
          <Progress color='secondary' value={50} />
          <Progress color='red' value={50} />
          <Progress color='green' value={50} />
        </div>
      </Section>

      <Section title='Size'>
        <Progress className='max-w-80' size={16} value={50} />
      </Section>
    </>
  )
}
