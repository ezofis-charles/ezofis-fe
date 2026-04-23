import { Trans, useLingui } from '@lingui/react/macro'
import { useState } from 'react'
import { ButtonIcon } from '@/components/base/button'
import { Menu } from '@/components/base/menu'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'
import { useTheme } from '@/hooks/use-theme'

export const ThemeSwitcher = () => {
  const { t } = useLingui()
  const {
    colorScheme,
    ColorSchemeOptions,
    handleColorSchemeChange,
    selectedColorScheme,
  } = useTheme()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuTrigger = (
    <div>
      <Tooltip
        content={t`Change theme`}
        disabled={isMenuOpen}
        openDelay={TOOLTIP_DELAY}
      >
        <ButtonIcon
          ariaLabel='Change theme'
          color='gray'
          icon={selectedColorScheme.icon}
          variant='ghost'
        />
      </Tooltip>
    </div>
  )

  const handleOnChange = (isOpen: boolean) => setIsMenuOpen(isOpen)

  return (
    <Menu
      aria-label='Theme options'
      position='bottom-end'
      target={menuTrigger}
      width={144}
      onChange={handleOnChange}
    >
      <Menu.Label>
        <Trans>Change Theme</Trans>
      </Menu.Label>
      {ColorSchemeOptions.map((option) => (
        <Menu.Item
          icon={option.value === colorScheme ? option.activeIcon : option.icon}
          key={option.value}
          label={option.label}
          iconClassName={
            option.value === colorScheme ? 'text-primary-11' : 'text-gray-11'
          }
          onClick={handleColorSchemeChange(option.value)}
        />
      ))}
    </Menu>
  )
}
