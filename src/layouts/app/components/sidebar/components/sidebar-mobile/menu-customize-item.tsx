import { Icon } from '@/components/base/icon'
import { Sortable } from '@/components/base/sortable'
import type { SidebarMenuItem } from '../../sidebar.types'

interface Props {
  index: number
  item: SidebarMenuItem
}

export const MenuCustomizeItem = ({ index, item }: Props) => {
  return (
    <Sortable
      className='mx-2 flex h-9 items-center gap-2 rounded px-2'
      draggingClassName='bg-gray-4'
      id={item.label}
      index={index}
    >
      <Icon className='text-gray-11' name={item.icon} />

      <div className='flex-1 font-medium whitespace-nowrap text-gray-12'>
        {item.label}
      </div>

      <Icon className='text-gray-8' name='material-symbols:drag-indicator' />
    </Sortable>
  )
}
