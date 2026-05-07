import type { ReactNode } from 'react'
import { Tabs as Base } from '@ark-ui/react/tabs'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  value: null | string
  color?: 'gray' | 'primary' | 'secondary'
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
  value,
  onChange,
}: Props) => {
  return (
    <Base.Root value={value} onValueChange={(e) => onChange(e.value)}>
      <Base.List
        className='group/tabs relative flex h-14 items-center gap-3 xl:h-12'
        data-color={color}
      >
        {children}
        <Base.Indicator
          className={cn(
            'bottom-0 h-0.5 w-(--width) rounded-full',
            indicatorClassNameMap[color],
          )}
        />
      </Base.List>
    </Base.Root>
  )
}
