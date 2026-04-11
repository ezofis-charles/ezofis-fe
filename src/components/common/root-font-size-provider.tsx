import { useOs } from '@mantine/hooks'
import { useEffect } from 'react'

export const RootFontSizeProvider = () => {
  const os = useOs()

  useEffect(() => {
    let fontSize = 16

    if (os === 'android' || os === 'ios') {
      fontSize = 18
    }

    document.documentElement.style.fontSize = `${fontSize}px`
  }, [os])

  return null
}
