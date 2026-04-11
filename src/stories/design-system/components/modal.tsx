import { useState } from 'react'
import { Button } from '@/components/base/button'
import { Modal } from '@/components/base/modal'
import { Overlay } from '@/components/base/overlay'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const ModalStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Header title='Modal' />

      <Section title='Default'>
        <Button
          color='gray'
          label='Open'
          variant='outline'
          onClick={() => setOpen(true)}
        />

        <Modal open={open} onClose={() => setOpen(false)}>
          <Overlay.Header title='Modal' onClose={() => setOpen(false)} />
          <Overlay.Content className='h-60'>
            <></>
          </Overlay.Content>
          <Overlay.Footer
            onCancel={() => setOpen(false)}
            onSave={() => setOpen(false)}
          />
        </Modal>
      </Section>
    </>
  )
}
