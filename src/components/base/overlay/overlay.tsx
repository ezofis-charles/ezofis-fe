import type { ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Overlay = ({ children, ...props }: Props) => {
  return <div {...props}>{children}</div>
}
