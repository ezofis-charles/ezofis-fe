import { useState } from 'react'
import { Avatar } from '@/components/base/avatar'
import { ButtonIcon } from '@/components/base/button'
import { Divider } from '@/components/base/divider'
import { ScrollArea } from '@/components/base/scroll-area'
import { Sheet } from '@/components/base/sheet'
import { useSessionStore } from '@/stores/use-session-store'
import { SidebarMenuItem } from '../../../sidebar-menu-item'
import { LanguageSwitcher } from './language-switcher'
import { SignOut } from './sign-out'
import { ThemeSwitcher } from './theme-switcher'

export const UserMenu = () => {
  const [open, setOpen] = useState(false)
  const user = useSessionStore((state) => state.user)

  return (
    <>
      <ButtonIcon
        ariaLabel='user menu'
        color='gray'
        icon='tabler:user'
        variant='ghost'
        onClick={() => setOpen(!open)}
      />

      <Sheet open={open} onClose={() => setOpen(false)}>
        <ScrollArea className='h-108 p-4'>
          <div className='flex items-center gap-4'>
            <Avatar
              className='shrink-0 border border-gray-3'
              imageLabel='user picture'
              initials={user?.name?.slice(0, 2).toUpperCase()}
              size={36}
            />

            <div className='min-w-0 flex-1'>
              <div className='truncate text-14 font-medium text-gray-12'>
                {user.name}
              </div>
              <div className='truncate text-13/6'>{user.email}</div>
            </div>
          </div>

          <Divider className='my-4' />

          <nav>
            <ul className='space-y-1'>
              <li>
                <SidebarMenuItem
                  icon='tabler:user'
                  iconClassName='size-9'
                  label='Profile'
                  route='/my-account/profile'
                />
              </li>
              <li>
                <SidebarMenuItem
                  icon='material-symbols:shield-outline-rounded'
                  iconClassName='size-9'
                  label='Security'
                  route='/my-account/security'
                />
              </li>
              <li>
                <SidebarMenuItem
                  icon='material-symbols:page-info-outline-rounded'
                  iconClassName='size-9'
                  label='Preferences'
                  route='/my-account/preferences'
                />
              </li>
            </ul>
          </nav>

          <Divider className='my-4' />

          <div className='space-y-1'>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>

          <Divider className='my-4' />
          <SignOut />
        </ScrollArea>
      </Sheet>
    </>
  )
}
