import { useLingui } from '@lingui/react/macro'
import { useViewportSize } from '@mantine/hooks'
import { SCREEN_SIZE } from '@/constants'
import type { SidebarMenuGroup, SidebarMode } from './sidebar-types'
import { SidebarDesktop } from './components/sidebar-desktop'
import { SidebarMobile } from './components/sidebar-mobile'
import { SidebarTablet } from './components/sidebar-tablet'

export const Sidebar = () => {
  const { t } = useLingui()
  const menuGroup: SidebarMenuGroup[] = [
    {
      items: [
        {
          activeIcon: 'material-symbols:dashboard-rounded',
          icon: 'material-symbols:dashboard-outline-rounded',
          label: t`Dashboard`,
          route: '/',
        },
        {
          activeIcon: 'material-symbols:inbox-rounded',
          icon: 'material-symbols:inbox-outline-rounded',
          label: t`Requests`,
          route: '/requests',
        },
      ],
      label: t`Overview`,
    },
    {
      items: [
        {
          activeIcon: 'material-symbols:account-tree-rounded',
          icon: 'material-symbols:account-tree-outline-rounded',
          label: 'Workflows',
          route: '/workflows',
        },
        {
          activeIcon: 'material-symbols:assignment-rounded',
          icon: 'material-symbols:assignment-outline-rounded',
          label: 'Forms',
          route: '/forms',
        },
        {
          activeIcon: 'material-symbols:folder-rounded',
          icon: 'material-symbols:folder-outline-rounded',
          label: 'Folders',
          route: '/folders',
        },
        {
          activeIcon: 'material-symbols:deployed-code',
          icon: 'material-symbols:deployed-code-outline',
          label: 'Tasks',
          route: '/tasks',
        },
        {
          activeIcon: 'material-symbols:toolbar',
          icon: 'material-symbols:toolbar-outline',
          label: 'Portals',
          route: '/portals',
        },
      ],
      label: 'Modules',
    },
  ]

  const { width } = useViewportSize()
  const mode: SidebarMode =
    width < SCREEN_SIZE.MD
      ? 'mobile'
      : width < SCREEN_SIZE.XL
        ? 'tablet'
        : 'desktop'

  return (
    <>
      {mode === 'desktop' && <SidebarDesktop menuGroup={menuGroup} />}
      {mode === 'tablet' && <SidebarTablet menuGroup={menuGroup} />}
      {mode === 'mobile' && <SidebarMobile menuGroup={menuGroup} />}
    </>
  )
}
