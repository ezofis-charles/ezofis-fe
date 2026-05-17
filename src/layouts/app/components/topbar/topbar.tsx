import { AiChatTrigger } from '../ai-chat'
import { GlobalSearchTrigger } from '../global-search'
import { Notifications } from '../notifications'
import { PageTitle } from './components/page-title'
import { SidebarToggle } from './components/sidebar-toggle'

export const Topbar = () => {
  return (
    <header className='flex h-14 items-center justify-between border-b border-gray-3 px-4 md:px-2 xl:h-12 xl:px-4'>
      <div className='flex items-center gap-1'>
        <SidebarToggle />
        <PageTitle />
      </div>

      <div className='hidden items-center gap-1 md:flex'>
        <GlobalSearchTrigger />
        <Notifications />
        <AiChatTrigger />
      </div>
    </header>
  )
}
