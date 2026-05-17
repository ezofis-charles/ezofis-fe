import { useViewportSize } from '@mantine/hooks'
import { useState } from 'react'
import { ButtonClose, ButtonIcon } from '@/components/base/button'
import { Drawer } from '@/components/base/drawer'
import { Icon } from '@/components/base/icon'
import { Indicator } from '@/components/base/indicator'
import { Overlay } from '@/components/base/overlay'
import { Sheet } from '@/components/base/sheet'
import { Tabs } from '@/components/base/tabs'
import { Title } from '@/components/base/title'
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
        <div className='flex h-14 items-center gap-1 border-b border-gray-3 pr-2 pl-4 xl:h-12'>
          <Title className='flex-1' level={2} title='Notifications' />
          <Tooltip
            content='Mark all as read'
            openDelay={TOOLTIP_DELAY}
            position='bottom'
          >
            <ButtonIcon
              ariaLabel='mark all as read'
              color='gray'
              icon='tabler:checks'
              variant='ghost'
            />
          </Tooltip>
          <ButtonClose onClick={() => setOpen(false)} />
        </div>

        <Overlay.Content className='h-[calc(100dvh-96px)] xl:h-[calc(100dvh-66px)]'>
          <div className='border-b border-gray-3 px-4'>
            <Tabs value={tab} onChange={setTab}>
              <Tabs.Tab counter='3' label='Unread' value='unread' />
              <Tabs.Tab label='All' value='all' />
            </Tabs>
          </div>

          <div className='mt-4 px-4'>
            <div className='mb-4 font-normal text-gray-10'>Today</div>

            <div className='space-y-4 divide-y divide-gray-3'>
              <div className='flex gap-4 pb-4'>
                <div className='flex size-8 items-center justify-center rounded-full border border-gray-3'>
                  <Icon name='lucide:workflow' />
                </div>

                <div className='flex-1 space-y-1'>
                  <div className='flex flex-wrap items-center gap-1'>
                    <span className='font-semibold text-gray-12'>@admin</span>
                    <span>created a workflow named</span>
                    <span className='font-semibold text-gray-12'>
                      Leave Approval
                    </span>
                  </div>

                  <div className='flex items-center gap-1.5 text-12 text-gray-9'>
                    <span>3 mins ago</span>
                    <Icon
                      className='size-2 xl:size-2'
                      name='tabler:point-filled'
                    />
                    <span>Workflow</span>
                  </div>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex size-8 items-center justify-center rounded-full border border-gray-3'>
                  <Icon name='lucide:workflow' />
                </div>

                <div className='flex-1 space-y-1'>
                  <div className='flex flex-wrap items-center gap-1'>
                    <span className='font-semibold text-gray-12'>@admin</span>
                    <span>created a workflow named</span>
                    <span className='font-semibold text-gray-12'>
                      Leave Approval
                    </span>
                  </div>

                  <div className='flex items-center gap-1.5 text-12 text-gray-9'>
                    <span>3 mins ago</span>
                    <Icon
                      className='size-2 xl:size-2'
                      name='tabler:point-filled'
                    />
                    <span>Workflow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Overlay.Content>
      </Component>
    </>
  )
}
