import type { ComponentProps } from 'react'

export const Tr = ({ ...props }: ComponentProps<'tr'>) => {
  return <tr {...props} />
}
