import { ButtonIcon } from '@/components/base/button'
import { Sheet } from '@/components/base/sheet'
import type { SidebarMenuGroup } from '../../sidebar-types'
import { UserMenu } from '../user-menu/user-menu'
import { MenuGroup } from './menu-group'
import { UserMenuTrigger } from './user-menu-trigger'

interface Props {
  menuGroup: SidebarMenuGroup[]
  open: boolean
  onClose: () => void
  onCustomize: () => void
}

export const Menu = ({ menuGroup, open, onClose, onCustomize }: Props) => {
  return (
    <Sheet open={open} onClose={onClose}>
      <MenuGroup menuGroup={menuGroup} />

      <div className='mr-4 mb-4 ml-5 flex items-center border-t border-gray-200 pt-4'>
        <UserMenu
          alignmentAxis={0}
          trigger={<UserMenuTrigger />}
          withinPortal={false}
        />

        <ButtonIcon
          color='gray'
          icon='material-symbols:page-info-outline-rounded'
          size='xl'
          variant='ghost'
          onClick={onCustomize}
        />
      </div>
    </Sheet>
  )
}
