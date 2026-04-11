import type { ReactNode } from 'react'
import { MantineProvider as Provider } from '@mantine/core'
import { mantineTheme } from './mantine-theme'

interface Props {
  children: ReactNode
}

export const MantineProvider = ({ children }: Props) => {
  return (
    <Provider defaultColorScheme='auto' theme={mantineTheme}>
      {children}
    </Provider>
  )
}
