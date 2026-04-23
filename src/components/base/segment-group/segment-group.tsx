import type { ReactNode } from 'react'
import { SegmentGroup as Base } from '@ark-ui/react/segment-group'
import { cn } from '@/utils/cn'

interface Props {
  children: ReactNode
  value: null | string
  className?: string
  disabled?: boolean
  onChange: (value: null | string) => void
}

export const SegmentGroup = ({
  children,
  className,
  disabled,
  value,
  onChange,
}: Props) => {
  return (
    <Base.Root
      disabled={disabled}
      value={value}
      className={cn(
        'relative inline-flex h-8 overflow-hidden rounded border border-gray-4 bg-surface-muted data-disabled:opacity-50',
        className,
      )}
      onValueChange={(e) => onChange(e.value)}
    >
      <Base.Indicator className='absolute top-(--top) left-(--left) z-0 h-(--height) w-(--width) bg-gray-3' />
      {children}
    </Base.Root>
  )
}
