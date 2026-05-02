import { useState } from 'react'
import { Button, ButtonIcon } from '@/components/base/button'
import { Tabs } from '@/components/base/tabs'

export const FormsPageHeader = () => {
  const [value, setValue] = useState<null | string>('all')

  return (
    <>
      <div className='border-b border-gray-3 px-4 xl:px-6'>
        <Tabs value={value} noPadding onChange={setValue}>
          <Tabs.Tab label='Inbox' value='all' />
          <Tabs.Tab label='Sent' value='favourites' />
          <Tabs.Tab label='Closed' value='drafts' />
        </Tabs>

        <div className='hidden items-center gap-2'>
          {/* <ButtonIcon
            className='bg-surface'
            color='gray'
            icon='tabler:filter-2'
            variant='outline'
          />
          <ButtonIcon
            className='bg-surface'
            color='gray'
            icon='tabler:settings'
            variant='outline'
          />
          <ButtonIcon
            className='bg-surface'
            color='gray'
            icon='tabler:reload'
            variant='outline'
          /> */}
        </div>
      </div>

      <div className='mt-6 flex flex-wrap items-center justify-between gap-4 px-4 xl:px-6'>
        <div className='flex items-center gap-2'>
          <Button
            className='w-36 bg-surface'
            color='gray'
            icon='tabler:search'
            label='Search'
            variant='outline'
          />
          <ButtonIcon
            className='bg-surface'
            color='gray'
            icon='tabler:filter-2'
            variant='outline'
          />
        </div>

        <div className='flex items-center gap-2'>
          {/* <Button
            className='bg-surface'
            color='gray'
            icon='material-symbols:page-info-outline-rounded'
            label='Options'
            variant='outline'
          /> */}
          <ButtonIcon
            className='bg-surface'
            color='gray'
            icon='material-symbols:page-info-outline-rounded'
            variant='outline'
          />
          <Button icon='tabler:plus' label='New Form' />
        </div>
      </div>
    </>
  )
}
