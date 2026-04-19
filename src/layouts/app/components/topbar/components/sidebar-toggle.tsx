import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'

export const SidebarToggle = () => {
  const sidebarState = useSidebarStore((state) => state.sidebarState)
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar)

  return (
    <Tooltip
      openDelay={TOOLTIP_DELAY}
      position='bottom-start'
      content={
        sidebarState === 'collapsed' ? 'Expand sidebar' : 'Collapse sidebar'
      }
    >
      <ButtonIcon
        ariaLabel='toggle sidebar'
        className='hidden md:inline-flex'
        color='gray'
        icon='tabler-menu-3'
        size='sm'
        variant='ghost'
        onClick={toggleSidebar}
      />
    </Tooltip>
  )
}
