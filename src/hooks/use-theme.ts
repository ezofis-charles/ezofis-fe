import type { MantineColorScheme } from '@mantine/core'
import { useLingui } from '@lingui/react/macro'
import { useMantineColorScheme } from '@mantine/core'

interface ColorSchemeOption {
  icon: string
  label: string
  value: MantineColorScheme
}

export function useTheme() {
  const { t } = useLingui()

  const ColorSchemeOptions: ColorSchemeOption[] = [
    {
      icon: 'tabler:device-desktop',
      label: t`System`,
      value: 'auto',
    },
    {
      icon: 'tabler:sun-high',
      label: t`Light`,
      value: 'light',
    },
    {
      icon: 'tabler:moon',
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
