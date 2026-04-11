import { Drawer } from '@/components/base/drawer'
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

export const SidebarTablet = ({ menuGroup }: Props) => {
  const sidebarState = useSidebarStore((state) => state.sidebarState)
  const setSidebarState = useSidebarStore((state) => state.setSidebarState)

  return (
    <Drawer
      offset={0}
      open={sidebarState === 'expanded'}
      position='left'
      width={SIDEBAR_SIZE.EXPANDED}
      withOverlay
      onClose={() => setSidebarState('collapsed')}
    >
      <Logo />
      <MenuGroup menuGroup={menuGroup} />
      <UserMenu trigger={<UserMenuTrigger />} />
    </Drawer>
  )
}
