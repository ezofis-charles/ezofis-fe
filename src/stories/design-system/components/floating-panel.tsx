import { Button } from '@/components/base/button'
import { FloatingPanel } from '@/components/base/floating-panel'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const FloatingPanelStory = () => {
  return (
    <>
      <Header title='Floating Panel' />

      <Section title='Default'>
        <FloatingPanel
          title='Floating Panel'
          trigger={<Button color='gray' label='Open' variant='outline' />}
        >
          <div className='p-4'></div>
        </FloatingPanel>
      </Section>

      <Section title='Initial Size'>
        <FloatingPanel
          initialSize={{ height: 400, width: 400 }}
          title='Floating Panel'
          trigger={<Button color='gray' label='Open' variant='outline' />}
        >
          <div className='p-4'></div>
        </FloatingPanel>
      </Section>
    </>
  )
}
