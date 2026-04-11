import { motion } from 'motion/react'
import { ANIMATE_NORMAL } from '@/constants'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import type { SidebarMenuGroup } from '../../sidebar.types'
import { SIDEBAR_SIZE } from '../../sidebar.constants'
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
      className='fixed inset-y-0 left-0 max-h-dvh min-h-dvh bg-surface-muted py-1'
      initial={{ width }}
      transition={{ duration: ANIMATE_NORMAL }}
    >
      <Logo />
      <MenuGroup menuGroup={menuGroup} />
      <UserMenu
        mainAxis={sidebarState === 'expanded' ? 8 : 0}
        trigger={<UserMenuTrigger />}
      />
    </motion.aside>
  )
}
