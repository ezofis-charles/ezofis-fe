import { useState } from 'react'
import { Button } from '@/components/base/button'
import { Drawer } from '@/components/base/drawer'
import { Overlay } from '@/components/base/overlay'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const DrawerStory = () => {
  const [open, setOpen] = useState(false)
  const [openLeft, setOpenLeft] = useState(false)
  const [openRight, setOpenRight] = useState(false)
  const [openWithoutOverlay, setOpenWithoutOverlay] = useState(false)

  return (
    <>
      <Header title='Drawer' />

      <Section title='Default'>
        <Button
          color='gray'
          label='Open'
          variant='outline'
          onClick={() => setOpen(true)}
        />

        <Drawer open={open} withOverlay onClose={() => setOpen(false)}>
          <Overlay.Header title='Drawer' onClose={() => setOpen(false)} />
          <Overlay.Content style={{ height: 'calc(100dvh - 126px' }}>
            <></>
          </Overlay.Content>
          <Overlay.Footer
            onCancel={() => setOpen(false)}
            onSave={() => setOpen(false)}
          />
        </Drawer>
      </Section>

      <Section title='Position'>
        <div className='flex items-center gap-2'>
          <Button
            color='gray'
            icon='tabler:arrow-left'
            label='Left'
            variant='outline'
            onClick={() => setOpenLeft(true)}
          />
          <Button
            color='gray'
            label='Right'
            suffixIcon='tabler:arrow-right'
            variant='outline'
            onClick={() => setOpenRight(true)}
          />
        </div>

        <Drawer
          open={openLeft}
          position='left'
          withOverlay
          onClose={() => setOpenLeft(false)}
        >
          <></>
        </Drawer>

        <Drawer
          open={openRight}
          withOverlay
          onClose={() => setOpenRight(false)}
        >
          <></>
        </Drawer>
      </Section>

      <Section title='Without Overlay'>
        <Button
          color='gray'
          label='Open'
          variant='outline'
          onClick={() => setOpenWithoutOverlay(true)}
        />

        <Drawer
          open={openWithoutOverlay}
          onClose={() => setOpenWithoutOverlay(false)}
        >
          <></>
        </Drawer>
      </Section>
    </>
  )
}
