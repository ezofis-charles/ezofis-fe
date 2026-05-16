import { AiChatTrigger } from '../ai-chat'
import { GlobalSearchTrigger } from '../global-search'
import { Notifications } from '../notifications'
import { PageTitle } from './components/page-title'
import { SidebarToggle } from './components/sidebar-toggle'

export const Topbar = () => {
  return (
    <header className='flex h-14 items-center justify-between border-b border-gray-3 pr-4 pl-3 xl:h-12 xl:pr-6 xl:pl-5'>
      <div className='flex items-center gap-2'>
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
