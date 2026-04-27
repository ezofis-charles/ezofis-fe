import { move } from '@dnd-kit/helpers'
import { DragDropProvider } from '@dnd-kit/react'
import { ScrollArea } from '@/components/base/scroll-area'
import { Sheet } from '@/components/base/sheet'
import type { SidebarMenuItem } from '../../sidebar-types'
import { PINNED_COUNT } from './constants'
import { MenuCustomizeItem } from './menu-customize-item'
import { MenuCustomizeLabel } from './menu-customize-label'

interface Props {
  items: SidebarMenuItem[]
  open: boolean
  setItems: (items: SidebarMenuItem[]) => void
  onClose: () => void
}

export const MenuCustomize = ({ items, open, setItems, onClose }: Props) => {
  return (
    <Sheet open={open} onClose={onClose}>
      <ScrollArea className='h-96'>
        <DragDropProvider
          onDragEnd={(event) => {
            if (event.canceled) return

            const ids = items.map((item) => item.label)
            const movedIds = move(ids, event)
            const movedItems = movedIds.map(
              (id) => items.find((item) => item.label === id)!,
            )
            setItems(movedItems)
          }}
        >
          <MenuCustomizeLabel label='Pinned' />
          <ul className='space-y-1 py-2'>
            {items.map((item, index) => {
              return (
                <>
                  {index === PINNED_COUNT && (
                    <MenuCustomizeLabel
                      className='pt-6'
                      key='others'
                      label='Others'
                    />
                  )}
                  <MenuCustomizeItem
                    index={index}
                    item={item}
                    key={item.label}
                  />
                </>
              )
            })}
          </ul>
        </DragDropProvider>
      </ScrollArea>
    </Sheet>
  )
}
