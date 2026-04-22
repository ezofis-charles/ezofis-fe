import { Link, useLocation } from '@tanstack/react-router'
import type { TooltipPosition } from '@/components/base/tooltip'
import { Icon } from '@/components/base/icon'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import { cn } from '@/utils/cn'
import type { SidebarMenuItem as SidebarMenuItemType } from '../../sidebar-types'
import { AnimatePresence } from './animate-presence'

interface Props extends SidebarMenuItemType {
  className?: string
  tooltipPosition?: TooltipPosition
}

export const MenuGroupItem = ({
  activeIcon,
  className,
  icon,
  label,
  route,
  tooltipPosition = 'right',
}: Props) => {
  const sidebarState = useSidebarStore((state) => state.sidebarState)
  const pathname = useLocation({
    select: (location) => location.pathname,
  })
  const isActive = pathname === route

  return (
    <Tooltip
      content={label}
      disabled={sidebarState === 'expanded'}
      openDelay={TOOLTIP_DELAY}
      position={tooltipPosition}
    >
      <Link
        to={route}
        className={cn(
          'group hover:bg-gray-4 focus-visible:bg-gray-4 flex items-center rounded outline-0 transition-colors',
          isActive && 'bg-gray-4',
          className,
        )}
      >
        <div className='flex size-8 shrink-0 items-center justify-center'>
          <Icon
            name={isActive ? activeIcon : icon}
            className={cn(
              'transition-colors',
              isActive ? 'text-primary' : 'group-hover:text-gray-12 text-gray',
            )}
          />
        </div>

        <AnimatePresence>
          <div className='text-gray-12 pr-2 font-medium whitespace-nowrap'>
            {label}
          </div>
        </AnimatePresence>
      </Link>
    </Tooltip>
  )
}
