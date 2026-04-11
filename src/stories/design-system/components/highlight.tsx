import { Highlight } from '@/components/base/highlight'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const HighlightStory = () => {
  return (
    <>
      <Header title='Highlight' />

      <Section title='Default'>
        <div className='w-96'>
          <Highlight words={['elit', 'omnis']}>
            Lorem ipsum dolor sit omnis, consectetur adipisicing elit. Culpa vel
            et autem asperiores ipsa impedit quod ut omnis at sed. Nemo totam in
            repellat iusto doloribus elit unde maiores nam.
          </Highlight>
        </div>
      </Section>
    </>
  )
}
