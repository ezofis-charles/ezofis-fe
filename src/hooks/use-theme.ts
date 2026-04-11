import type { MantineColorScheme } from '@mantine/core'
import { useLingui } from '@lingui/react/macro'
import { useMantineColorScheme } from '@mantine/core'

interface ColorSchemeOption {
  activeIcon: string
  icon: string
  label: string
  value: MantineColorScheme
}

export function useTheme() {
  const { t } = useLingui()

  const ColorSchemeOptions: ColorSchemeOption[] = [
    {
      activeIcon: 'material-symbols:monitor-rounded',
      icon: 'material-symbols:monitor-outline-rounded',
      label: t`System`,
      value: 'auto',
    },
    {
      activeIcon: 'material-symbols:light-mode-rounded',
      icon: 'material-symbols:light-mode-outline-rounded',
      label: t`Light`,
      value: 'light',
    },
    {
      activeIcon: 'material-symbols:dark-mode-rounded',
      icon: 'material-symbols:dark-mode-outline-rounded',
      label: t`Dark`,
      value: 'dark',
    },
  ]

  const { colorScheme, setColorScheme } = useMantineColorScheme()

  const handleColorSchemeChange = (value: MantineColorScheme) => () =>
    setColorScheme(value)

  const selectedColorScheme = ColorSchemeOptions.find(
    ({ value }) => value === colorScheme,
  )!

  return {
    colorScheme,
    ColorSchemeOptions,
    handleColorSchemeChange,
    selectedColorScheme,
  }
}
