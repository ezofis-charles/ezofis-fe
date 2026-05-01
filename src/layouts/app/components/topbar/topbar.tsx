import { GlobalSearch } from './components/global-search'
import { Notifications } from './components/notifications'
import { PageTitle } from './components/page-title'

export const Topbar = () => {
  return (
    <header className='flex h-14 items-center justify-between border-b border-gray-3 px-4 xl:h-12 xl:px-6'>
      <PageTitle />

      <div className='flex items-center gap-1'>
        <GlobalSearch />
        <Notifications />
      </div>
    </header>
  )
}
