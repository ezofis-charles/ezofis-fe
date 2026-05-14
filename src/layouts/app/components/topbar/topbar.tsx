import { AiChatToggle } from './components/ai-chat-toggle'
import { GlobalSearch } from './components/global-search'
import { NotificationsTrigger } from './components/notifications/components/notifications-trigger'
import { PageTitle } from './components/page-title'
import { SidebarToggle } from './components/sidebar-toggle'

export const Topbar = () => {
  return (
    <header className='flex h-16 items-center justify-between border-b border-gray-3 px-4 xl:h-12 xl:px-6'>
      <div className='flex items-center gap-2'>
        <SidebarToggle />
        <PageTitle />
      </div>

      <div className='flex items-center gap-1'>
        <GlobalSearch />
        <NotificationsTrigger />
        <AiChatToggle />
      </div>
    </header>
  )
}
