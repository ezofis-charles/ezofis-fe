import { useViewportSize } from '@mantine/hooks'
import { useState } from 'react'
import { ButtonIcon } from '@/components/base/button'
import { Drawer } from '@/components/base/drawer'
import { Indicator } from '@/components/base/indicator'
import { Overlay } from '@/components/base/overlay'
import { Sheet } from '@/components/base/sheet'
import { Tabs } from '@/components/base/tabs'
import { Tooltip } from '@/components/base/tooltip'
import { SCREEN_SIZE, TOOLTIP_DELAY } from '@/constants'

export const Notifications = () => {
  const { width } = useViewportSize()
  const Component = width < SCREEN_SIZE.MD ? Sheet : Drawer

  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<null | string>('unread')

  return (
    <>
      <Tooltip
        content='Notifications'
        openDelay={TOOLTIP_DELAY}
        position='right'
      >
        <Indicator offset={8} animate>
          <ButtonIcon
            ariaLabel='notifications'
            color='gray'
            icon='tabler:bell'
            variant='ghost'
            onClick={() => setOpen(!open)}
          />
        </Indicator>
      </Tooltip>

      <Component open={open} withOverlay onClose={() => setOpen(false)}>
        <Overlay.Header title='Notifications' onClose={() => setOpen(false)} />
        <Overlay.Content className='h-[calc(100dvh-96px)] xl:h-[calc(100dvh-66px)]'>
          <div className='border-b border-gray-3 pr-4 pl-3'>
            <Tabs value={tab} onChange={setTab}>
              <Tabs.Tab label='All' value='all' />
              <Tabs.Tab counter='3' label='Unread' value='unread' />
            </Tabs>
          </div>
        </Overlay.Content>
      </Component>
    </>
  )
}
