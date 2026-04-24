import { ScrollArea } from '@/components/base/scroll-area'
import { cn } from '@/utils/cn'
import type { SidebarMenuGroup } from '../../sidebar-types'
import { MenuGroupItem } from '../../menu-group-item'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const MenuGroup = ({ menuGroup }: Props) => {
  return (
    <ScrollArea style={{ height: 'calc(100dvh - 112px)' }}>
      <nav className='py-2'>
        {menuGroup.map((group, index) => (
          <div key={group.label}>
            <div
              className={cn(
                'px-4 py-2 text-12 font-medium whitespace-nowrap text-gray-10',
                index !== 0 && 'mt-4',
              )}
            >
              {group.label}
            </div>

            <ul className='space-y-0.5'>
              {group.items.map((item) => (
                <li className='px-2' key={item.label}>
                  <MenuGroupItem {...item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </ScrollArea>
  )
}
