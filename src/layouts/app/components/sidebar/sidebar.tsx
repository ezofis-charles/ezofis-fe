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
          icon: 'tabler:layout-dashboard',
          label: t`Dashboard`,
          route: '/',
        },
        {
          icon: 'tabler:inbox',
          label: t`Requests`,
          route: '/requests',
        },
      ],
      label: t`Overview`,
    },
    {
      items: [
        {
          icon: 'lucide:workflow',
          label: 'Workflows',
          route: '/workflows',
        },
        {
          icon: 'tabler:clipboard',
          label: 'Forms',
          route: '/forms',
        },
        {
          icon: 'tabler:folder',
          label: 'Folders',
          route: '/folders',
        },
        {
          icon: 'tabler:box',
          label: 'Tasks',
          route: '/tasks',
        },
        {
          icon: 'tabler:picture-in-picture',
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
