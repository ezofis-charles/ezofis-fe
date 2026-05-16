import { Icon } from '@/components/base/icon'
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
    <Menu
      position='top-end'
      withinPortal={false}
      target={
        <div className='flex items-center gap-1'>
          <div className='flex size-9 items-center justify-center'>
            <Icon name={selectedColorScheme.icon} />
          </div>

          <div className='min-w-0 flex-1 font-medium whitespace-nowrap text-gray-11'>
            Theme
          </div>

          <Icon name='tabler:chevron-right' />
        </div>
      }
    >
      {ColorSchemeOptions.map((option) => (
        <Menu.Item
          icon={option.icon}
          key={option.value}
          label={option.label}
          iconClassName={
            option.value === colorScheme ? 'text-primary-11' : 'text-gray-9'
          }
          onClick={handleColorSchemeChange(option.value)}
        />
      ))}
    </Menu>
  )
}
