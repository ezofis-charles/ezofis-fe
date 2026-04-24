import { Link, useLocation } from '@tanstack/react-router'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import type { SidebarMenuItem } from '../../sidebar-types'
import { PINNED_COUNT } from './constants'

interface Props {
  items: SidebarMenuItem[]
}

export const MenuPinned = ({ items }: Props) => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  })

  const pinned = items.slice(0, PINNED_COUNT)

  return (
    <>
      {pinned.map((item) => (
        <Link
          key={item.route}
          to={item.route}
          className={cn(
            'group flex size-8 items-center justify-center rounded outline-primary-8 hover:bg-gray-4',
            pathname === item.route && 'bg-gray-4',
          )}
        >
          <Icon
            name={pathname === item.route ? item.activeIcon : item.icon}
            className={
              pathname === item.route
                ? 'text-primary'
                : 'text-gray group-hover:text-gray-12'
            }
          />
        </Link>
      ))}
    </>
  )
}
