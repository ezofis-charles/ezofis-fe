import type { ReactNode } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { Menu } from '@/components/base/menu'
import { useSessionStore } from '@/stores/use-session-store'
import { LanguageSwitcher } from './language-switcher'
import { ThemeSwitcher } from './theme-switcher'

interface Props {
  alignmentAxis?: number
  mainAxis?: number
  trigger?: ReactNode
  withinPortal?: boolean
}

export const UserMenu = ({
  alignmentAxis = 8,
  mainAxis = 8,
  trigger,
  withinPortal = true,
}: Props) => {
  const navigate = useNavigate()
  const clearSession = useSessionStore((state) => state.clearSession)

  const goto = (slug: string) => {
    navigate({ params: { slug }, to: '/my-account/{-$slug}' })
  }

  const logout = () => {
    clearSession()
    navigate({ replace: true, to: '/sign-in' })
  }

  return (
    <Menu
      offset={{ alignmentAxis, mainAxis }}
      position='top-start'
      target={trigger}
      targetClassName='w-full'
      width={224}
      withinPortal={withinPortal}
    >
      <Menu.Item
        icon='tabler:user'
        label='Profile'
        onClick={() => goto('profile')}
      />
      <Menu.Item
        icon='material-symbols:shield-outline-rounded'
        label='Security'
        onClick={() => goto('security')}
      />
      <Menu.Item
        icon='material-symbols:page-info-outline-rounded'
        label='Preferences'
        onClick={() => goto('preferences')}
      />
      <Menu.Divider />
      <ThemeSwitcher />
      <LanguageSwitcher />
      <Menu.Divider />
      <Menu.Item
        icon='material-symbols:logout-rounded'
        iconClassName='text-red-11'
        label='Sign out'
        onClick={logout}
      />
    </Menu>
  )
}
