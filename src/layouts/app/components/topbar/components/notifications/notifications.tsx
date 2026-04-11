import { EmptyState } from '@/components/base/empty-state'
import { Menu } from '@/components/base/menu'
import { NotificationsHeader } from './components/notifications-header'
import { NotificationsTrigger } from './components/notifications-trigger'

export const Notifications = () => {
  return (
    <Menu
      closeOnItemClick={false}
      position='bottom-end'
      target={<NotificationsTrigger />}
      width={360}
    >
      <NotificationsHeader />
      <div className='flex h-96 items-center justify-center px-10'>
        <EmptyState
          description="We'll let you know when we've got something new for you."
          icon='tabler:bell'
          title='No Notifications Yet'
        />
      </div>
    </Menu>
  )
}
