import { useState } from 'react'
import { Tabs } from '@/components/base/tabs'
import { ClearAll } from './components/clear-all'
import { MarkAll } from './components/mark-all'
import { Search } from './components/search'

export const NotificationsHeader = () => {
  const [value, setValue] = useState<null | string>('Unread')

  return (
    <div className='border-b border-gray-200 pr-2 pl-3'>
      <div className='flex flex-wrap items-center'>
        <div className='text-gray-12 flex-1 text-15 font-semibold'>
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
