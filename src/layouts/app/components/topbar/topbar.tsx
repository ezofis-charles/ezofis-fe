import { GlobalSearch } from './components/global-search'
import { Notifications } from './components/notifications'
import { PageTitle } from './components/page-title'
import { SidebarToggle } from './components/sidebar-toggle'

export const Topbar = () => {
  return (
    <header className='sticky top-0 flex h-16 items-center justify-between rounded-b-2xl bg-surface px-6 ring ring-gray-4 xl:h-12 xl:rounded-b-none xl:border-b xl:border-gray-3 xl:bg-surface xl:px-4.5 xl:ring-0'>
      <div className='flex items-center gap-2'>
        <SidebarToggle />
        <PageTitle />
      </div>

      <div className='flex items-center gap-2 lg:gap-1'>
        <GlobalSearch />
        <Notifications />
      </div>
    </header>
  )
}
