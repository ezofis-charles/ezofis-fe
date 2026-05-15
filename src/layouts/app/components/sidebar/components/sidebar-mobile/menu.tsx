import { useState } from 'react'
import { ButtonIcon } from '@/components/base/button'
import { ScrollArea } from '@/components/base/scroll-area'
import { Sheet } from '@/components/base/sheet'
import { cn } from '@/utils/cn'
import type { SidebarMenuGroup } from '../../sidebar-types'
import { MenuGroupItem } from '../../menu-group-item'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const Menu = ({ menuGroup }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ButtonIcon
        ariaLabel='menu'
        color='gray'
        icon='tabler:menu-3'
        variant='ghost'
        onClick={() => setOpen(!open)}
      />

      <Sheet open={open} onClose={() => setOpen(false)}>
        <ScrollArea className='h-96'>
          <nav className='p-2'>
            {menuGroup.map((group, index) => (
              <div key={group.label}>
                <div
                  className={cn(
                    'px-4 py-2 text-12 whitespace-nowrap text-gray-10',
                    index !== 0 && 'mt-4',
                  )}
                >
                  {group.label}
                </div>

                <ul className='space-y-1'>
                  {group.items.map((item) => (
                    <li className='px-2' key={item.label}>
                      <MenuGroupItem {...item} iconClassName='size-9' />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </Sheet>
    </>
  )
}
