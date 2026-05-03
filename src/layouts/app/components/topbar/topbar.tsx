import { SidebarToggle } from '../sidebar/components/sidebar-toggle'
import { AiChatToggle } from './components/ai-chat-toggle'
import { GlobalSearch } from './components/global-search'
import { PageTitle } from './components/page-title'

export const Topbar = () => {
  return (
    <header className='flex h-16 items-center justify-between border-b border-gray-3 px-4 xl:h-12 xl:px-6'>
      <div className='flex items-center gap-2'>
        <div className='hidden md:block xl:hidden'>
          <SidebarToggle />
        </div>
        <PageTitle />
      </div>

      <div className='flex items-center gap-1'>
        <GlobalSearch />
        <AiChatToggle />
      </div>
    </header>
  )
}
