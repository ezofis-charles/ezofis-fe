import { motion } from 'motion/react'
import { ANIMATE_NORMAL } from '@/constants'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import { cn } from '@/utils/cn'
import type { SidebarMenuGroup } from '../../sidebar-types'
import { SIDEBAR_SIZE } from '../../sidebar-constants'
import { SidebarToggle } from '../sidebar-toggle'
import { UserMenu } from '../user-menu/user-menu'
import { Logo } from './logo'
import { MenuGroup } from './menu-group'
import { UserMenuTrigger } from './user-menu-trigger'

interface Props {
  menuGroup: SidebarMenuGroup[]
}

export const SidebarDesktop = ({ menuGroup }: Props) => {
  const sidebarState = useSidebarStore((state) => state.sidebarState)
  const width =
    sidebarState === 'collapsed'
      ? SIDEBAR_SIZE.COLLAPSED
      : SIDEBAR_SIZE.EXPANDED

  return (
    <motion.aside
      animate={{ width }}
      className='group/sidebar fixed inset-y-0 left-0 h-dvh min-h-svh bg-surface-muted'
      data-expanded={sidebarState === 'expanded'}
      initial={{ width }}
      transition={{ duration: ANIMATE_NORMAL }}
    >
      <div className='flex h-12 items-center px-2.5'>
        <Logo />
        <div
          className={cn(
            sidebarState === 'collapsed'
              ? 'hidden group-hover/sidebar:block'
              : 'block',
          )}
        >
          <SidebarToggle />
        </div>
      </div>
      <MenuGroup menuGroup={menuGroup} />
      <UserMenu
        mainAxis={sidebarState === 'expanded' ? 8 : 0}
        trigger={<UserMenuTrigger />}
      />
    </motion.aside>
  )
}
