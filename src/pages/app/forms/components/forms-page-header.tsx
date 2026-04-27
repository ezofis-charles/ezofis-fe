import { useState } from 'react'
import { Button, ButtonIcon } from '@/components/base/button'
import { Divider } from '@/components/base/divider'
import { Tabs } from '@/components/base/tabs'

export const FormsPageHeader = () => {
  const [value, setValue] = useState<null | string>('all')

  return (
    <div className='flex h-12 items-center justify-between border-b border-gray-3 pr-4 pl-6'>
      <Tabs value={value} noPadding onChange={setValue}>
        <Tabs.Tab label='All' value='all' />
        <Tabs.Tab label='Favourites' value='favourites' />
        <Tabs.Tab label='Drafts' value='drafts' />
      </Tabs>

      <div className='flex items-center gap-1 xl:gap-0'>
        <ButtonIcon color='gray' icon='tabler:filter-2' variant='ghost' />
        <ButtonIcon color='gray' icon='tabler:settings' variant='ghost' />
        <ButtonIcon color='gray' icon='tabler:reload' variant='ghost' />
        <Divider className='my-1 mr-4 ml-2' orientation='vertical' />
        <Button icon='tabler:plus' label='New Form' size='sm' />
      </div>
    </div>
  )
}
