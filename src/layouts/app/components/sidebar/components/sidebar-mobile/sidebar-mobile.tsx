import { useState } from 'react'
import { ButtonIcon } from '@/components/base/button'
import type { SidebarMenuGroup, SidebarMenuItem } from '../../sidebar-types'
import { Menu } from './menu'
import { MenuCustomize } from './menu-customize'
import { MenuPinned } from './menu-pinned'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const SidebarMobile = ({ menuGroup }: Props) => {
  const [items, setItems] = useState<SidebarMenuItem[]>(
    menuGroup.flatMap((group) => group.items),
  )
  const [open, setOpen] = useState(false)
  const [openCustomize, setOpenCustomize] = useState(false)

  const handleCustomize = () => {
    setOpen(false)
    setOpenCustomize(true)
  }

  return (
    <div className='fixed inset-x-0 bottom-0 rounded-t-2xl bg-surface px-4 ring ring-gray-4'>
      <div className='flex h-16 items-center justify-around gap-4'>
        <MenuPinned items={items} />
        <ButtonIcon
          color='gray'
          icon='material-symbols:unfold-more-rounded'
          size='lg'
          variant='ghost'
          onClick={() => setOpen(true)}
        />
      </div>

      <Menu
        menuGroup={menuGroup}
        open={open}
        onClose={() => setOpen(false)}
        onCustomize={handleCustomize}
      />

      <MenuCustomize
        items={items}
        open={openCustomize}
        setItems={setItems}
        onClose={() => setOpenCustomize(false)}
      />
    </div>
  )
}
