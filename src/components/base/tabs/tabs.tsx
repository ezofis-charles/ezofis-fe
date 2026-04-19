import type { ReactNode } from 'react'
import { Tabs as Base } from '@ark-ui/react/tabs'
import { cn } from '@/utils/cn'
import { indicatorClassName, triggerClassName } from './tabs-styles'

interface Props {
  children: ReactNode
  value: null | string
  color?: 'gray' | 'primary' | 'secondary'
  noPadding?: boolean
  variant?: 'outline' | 'solid' | 'subtle'
  onChange: (value: null | string) => void
}

export const Tabs = ({
  children,
  color = 'primary',
  noPadding = false,
  value,
  variant = 'outline',
  onChange,
}: Props) => {
  return (
    <Base.Root value={value} onValueChange={(e) => onChange(e.value)}>
      <Base.List
        className={cn(
          'relative flex h-12 items-center gap-2',
          triggerClassName({ color, variant }),
          noPadding && 'gap-6 **:data-[part=trigger]:px-0',
        )}
      >
        {children}
        <Base.Indicator className={indicatorClassName({ color, variant })} />
      </Base.List>
    </Base.Root>
  )
}
