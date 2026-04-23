import { useState } from 'react'
import { Button, ButtonIcon } from '@/components/base/button'
import { Tabs } from '@/components/base/tabs'

export const FormsPageHeader = () => {
  const [value, setValue] = useState<null | string>('all')

  return (
    <div className='flex h-12 items-center justify-between border-b border-gray-3 px-6'>
      <Tabs value={value} noPadding onChange={setValue}>
        <Tabs.Tab label='All' value='all' />
        <Tabs.Tab label='Favourites' value='favourites' />
        <Tabs.Tab label='Drafts' value='drafts' />
      </Tabs>

      <div className='hidden items-center gap-2 lg:gap-1'>
        <ButtonIcon color='gray' icon='tabler:filter-2' variant='ghost' />
        <ButtonIcon color='gray' icon='tabler:settings' variant='ghost' />

        <Button
          color='gray'
          icon='tabler:plus'
          label='New Form'
          variant='outline'
        />
      </div>

      <Button icon='tabler:plus' label='New Form' size='sm' />
    </div>
  )
}
