import type { SidebarMenuGroup } from '../../sidebar-types'
import { AiChatTrigger } from '../../../ai-chat'
import { GlobalSearchTrigger } from '../../../global-search'
import { Notifications } from '../../../notifications'
import { Menu } from './components/menu'
import { UserMenu } from './components/user-menu'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const SidebarMobile = ({ menuGroup }: Props) => {
  return (
    <div className='fixed inset-x-0 bottom-0 z-1 flex h-16 items-center justify-between rounded-t-2xl bg-linear-to-b from-surface-muted px-4 ring ring-gray-4'>
      <Menu menuGroup={menuGroup} />
      <GlobalSearchTrigger />
      <AiChatTrigger />
      <Notifications />
      <UserMenu />
    </div>
  )
}
