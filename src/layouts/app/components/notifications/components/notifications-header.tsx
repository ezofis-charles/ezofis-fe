import { ButtonClose, ButtonIcon } from '@/components/base/button'
import { Tabs } from '@/components/base/tabs'
import { Title } from '@/components/base/title'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'
import { useNotificationsStore } from '../stores/use-notifications-store'

export const NotificationsHeader = () => {
  const tab = useNotificationsStore((state) => state.tab)
  const unreadCount = useNotificationsStore((state) => state.unreadCount)
  const closeNotifications = useNotificationsStore(
    (state) => state.closeNotifications,
  )
  const setTab = useNotificationsStore((state) => state.setTab)

  return (
    <>
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
        <ButtonClose onClick={closeNotifications} />
      </div>

      <div className='border-b border-gray-3 px-4'>
        <Tabs value={tab} onChange={setTab}>
          <Tabs.Tab counter={unreadCount} label='Unread' value='unread' />
          <Tabs.Tab label='All' value='all' />
        </Tabs>
      </div>
    </>
  )
}
