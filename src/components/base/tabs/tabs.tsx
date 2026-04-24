import type { ReactNode } from 'react'
import { Tabs as Base } from '@ark-ui/react/tabs'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  value: null | string
  color?: 'gray' | 'primary' | 'secondary'
  noPadding?: boolean
  onChange: (value: null | string) => void
}

const indicatorClassNameMap = {
  gray: 'bg-gray-11',
  primary: 'bg-primary-11',
  secondary: 'bg-secondary-9',
}

export const Tabs = ({
  children,
  color = 'primary',
  noPadding = false,
  value,
  onChange,
}: Props) => {
  return (
    <Base.Root value={value} onValueChange={(e) => onChange(e.value)}>
      <Base.List
        data-color={color}
        className={cn(
          'group/tabs relative flex h-11 items-center gap-2',
          noPadding && 'gap-6 **:data-[part=trigger]:px-0',
        )}
      >
        {children}
        <Base.Indicator
          className={cn(
            'bottom-0 h-0.5 w-(--width) rounded',
            indicatorClassNameMap[color],
          )}
        />
      </Base.List>
    </Base.Root>
  )
}
