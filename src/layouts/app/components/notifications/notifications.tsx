import { useViewportSize } from '@mantine/hooks'
import { ButtonIcon } from '@/components/base/button'
import { Drawer } from '@/components/base/drawer'
import { Icon } from '@/components/base/icon'
import { Indicator } from '@/components/base/indicator'
import { Overlay } from '@/components/base/overlay'
import { Sheet } from '@/components/base/sheet'
import { Tooltip } from '@/components/base/tooltip'
import { SCREEN_SIZE, TOOLTIP_DELAY } from '@/constants'
import { NotificationsHeader } from './components/notifications-header'
import { useNotificationsStore } from './stores/use-notifications-store'

export const Notifications = () => {
  const { width } = useViewportSize()
  const Component = width < SCREEN_SIZE.MD ? Sheet : Drawer

  const isNotificationsOpen = useNotificationsStore(
    (state) => state.isNotificationsOpen,
  )
  const openNotifications = useNotificationsStore(
    (state) => state.openNotifications,
  )
  const closeNotifications = useNotificationsStore(
    (state) => state.closeNotifications,
  )

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
            onClick={openNotifications}
          />
        </Indicator>
      </Tooltip>

      <Component
        open={isNotificationsOpen}
        withOverlay
        onClose={closeNotifications}
      >
        <NotificationsHeader />
        <Overlay.Content className='h-[calc(100dvh-96px)] xl:h-[calc(100dvh-116px)]'>
          <div className='mt-6 px-4'>
            <div className='mb-3 text-12 font-normal text-gray-10'>Today</div>

            <div className='space-y-4 divide-y divide-gray-3'>
              <div className='flex gap-4 pb-4' draggable>
                <div className='flex h-11 items-center'>
                  <div className='squircle-md flex size-8 items-center justify-center rounded bg-gray-3'>
                    <Icon name='lucide:workflow' />
                  </div>
                </div>

                <div className='flex-1 space-y-1'>
                  <div className='font-medium text-pretty text-gray-12'>
                    Admin created a workflow named Leave Approval.
                  </div>

                  <div className='flex items-center gap-1.5 text-12 text-gray-10'>
                    <span>12:15 PM</span>
                    <Icon
                      className='size-2 xl:size-2'
                      name='tabler:point-filled'
                    />
                    <span>Workflow</span>
                  </div>
                </div>
              </div>

              <div className='flex gap-4 pb-4'>
                <div className='flex h-11 items-center'>
                  <div className='squircle-md flex size-8 items-center justify-center rounded bg-gray-3'>
                    <Icon name='tabler:clipboard' />
                  </div>
                </div>

                <div className='flex-1 space-y-1'>
                  <div className='font-medium text-pretty text-gray-12'>
                    Charles Vinoth edited the Employee Verification form.
                  </div>

                  <div className='flex items-center gap-1.5 text-12 text-gray-10'>
                    <span>9:43 AM</span>
                    <Icon
                      className='size-2 xl:size-2'
                      name='tabler:point-filled'
                    />
                    <span>Form</span>
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
