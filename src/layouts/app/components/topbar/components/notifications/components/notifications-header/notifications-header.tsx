import { useState } from 'react'
import { Tabs } from '@/components/base/tabs'
import { ClearAll } from './components/clear-all'
import { MarkAll } from './components/mark-all'
import { Search } from './components/search'

export const NotificationsHeader = () => {
  const [value, setValue] = useState<null | string>('Unread')

  return (
    <div className='border-b border-gray-3 pr-2 pl-3'>
      <div className='flex flex-wrap items-center'>
        <div className='text-15 flex-1 font-semibold text-gray-12'>
          Notifications
        </div>
        <Search />
        <MarkAll />
        <ClearAll />
      </div>

      <Tabs color='primary' value={value} onChange={setValue}>
        <Tabs.Tab label='All' value='All' />
        <Tabs.Tab label='Read' value='Read' />
        <Tabs.Tab label='Unread (4)' value='Unread' />
      </Tabs>
    </div>
  )
}
