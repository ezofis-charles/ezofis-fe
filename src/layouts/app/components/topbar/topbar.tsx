import { GlobalSearch } from './components/global-search'
import { Notifications } from './components/notifications'
import { PageTitle } from './components/page-title'
import { SidebarToggle } from './components/sidebar-toggle'

export const Topbar = () => {
  return (
    <header className='flex h-16 items-center justify-between rounded-b-3xl border-b border-gray-3 px-6 ring ring-gray-4 xl:h-12 xl:rounded-b-none xl:px-4 xl:ring-0'>
      <div className='flex items-center gap-2'>
        <SidebarToggle />
        <PageTitle />
      </div>

      <div className='flex items-center gap-1 xl:gap-0'>
        <GlobalSearch />
        <Notifications />
      </div>
    </header>
  )
}
