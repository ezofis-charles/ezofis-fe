import { ButtonIcon } from '@/components/base/button'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'

export const SidebarToggle = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar)

  return (
    <ButtonIcon
      ariaLabel='toggle sidebar'
      color='gray'
      icon='tabler:layout-sidebar'
      variant='ghost'
      onClick={toggleSidebar}
    />
  )
}
