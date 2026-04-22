import { ProgressCircle } from '@/components/base/progress-circle'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const ProgressCircleStory = () => {
  return (
    <>
      <Header title='Progress Circle' />

      <Section title='Default'>
        <ProgressCircle size={100} value={50} />
      </Section>

      <Section title='Label'>
        <ProgressCircle
          size={100}
          value={50}
          label={
            <div className='text-gray-12 text-center font-semibold'>50%</div>
          }
        />
      </Section>

      <Section title='Colors'>
        <div className='flex flex-wrap items-center gap-2'>
          <ProgressCircle size={100} value={50} />
          <ProgressCircle color='secondary' size={100} value={50} />
          <ProgressCircle color='red' size={100} value={50} />
          <ProgressCircle color='green' size={100} value={50} />
        </div>
      </Section>

      <Section title='Size'>
        <ProgressCircle size={60} value={50} />
      </Section>
    </>
  )
}
