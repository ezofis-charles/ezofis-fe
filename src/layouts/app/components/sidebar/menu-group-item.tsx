import { Link, useLocation } from '@tanstack/react-router'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import type { SidebarMenuItem as SidebarMenuItemType } from './sidebar-types'

interface Props extends SidebarMenuItemType {
  iconClassName?: string
}

export const MenuGroupItem = ({
  activeIcon,
  icon,
  iconClassName,
  label,
  route,
}: Props) => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  })
  const isActive = pathname === route

  return (
    <Link
      to={route}
      className={cn(
        'group flex items-center rounded outline-0 transition-colors hover:bg-gray-4 focus-visible:bg-gray-4',
        isActive && 'bg-gray-4',
      )}
    >
      <div
        className={cn(
          'flex size-8 shrink-0 items-center justify-center',
          iconClassName,
        )}
      >
        <Icon
          name={isActive ? activeIcon : icon}
          className={cn(
            'transition-colors',
            isActive ? 'text-primary' : 'text-gray group-hover:text-gray-12',
          )}
        />
      </div>

      <div className='pr-2 font-medium whitespace-nowrap text-gray-12'>
        {label}
      </div>
    </Link>
  )
}
