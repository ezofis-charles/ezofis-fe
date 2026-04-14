import { ScrollArea } from '@/components/base/scroll-area'
import type { SidebarMenuGroup } from '../../sidebar-types'
import { MenuGroupItem } from './menu-group-item'
import { MenuGroupLabel } from './menu-group-label'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const MenuGroup = ({ menuGroup }: Props) => {
  return (
    <ScrollArea style={{ height: 'calc(100dvh - 104px)' }}>
      <nav className='py-2'>
        {menuGroup.map((group, index) => (
          <div key={group.label}>
            <MenuGroupLabel index={index} label={group.label} />

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
