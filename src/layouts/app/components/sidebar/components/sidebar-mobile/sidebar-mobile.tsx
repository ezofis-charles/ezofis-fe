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
    <div className='fixed inset-x-0 bottom-0 z-1 border-t border-gray-3 bg-surface px-4'>
      <div className='flex h-16 items-center justify-between'>
        <MenuPinned items={items} />
        <ButtonIcon
          color='gray'
          icon='material-symbols:unfold-more-rounded'
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
