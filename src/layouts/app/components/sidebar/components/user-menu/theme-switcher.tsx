import { Menu } from '@/components/base/menu'
import { useTheme } from '@/hooks/use-theme'

export const ThemeSwitcher = () => {
  const {
    colorScheme,
    ColorSchemeOptions,
    handleColorSchemeChange,
    selectedColorScheme,
  } = useTheme()

  return (
    <Menu.Sub icon={selectedColorScheme.icon} label='Theme'>
      {ColorSchemeOptions.map((option) => (
        <Menu.Item
          icon={option.value === colorScheme ? option.activeIcon : option.icon}
          key={option.value}
          label={option.label}
          iconClassName={
            option.value === colorScheme ? 'text-primary-11' : 'text-gray-9'
          }
          onClick={handleColorSchemeChange(option.value)}
        />
      ))}
    </Menu.Sub>
  )
}
