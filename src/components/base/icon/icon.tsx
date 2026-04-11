import type { SVGProps } from 'react'
import { Icon as Base } from '@iconify/react'
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

interface Props extends SVGProps<SVGSVGElement> {
  name: string
  className?: string
}

export const Icon = forwardRef<SVGSVGElement, Props>(
  ({ className, name }, ref) => {
    return (
      <Base
        icon={name}
        ref={ref}
        className={cn(
          'inline-block size-4.5 shrink-0 text-inherit xl:size-4',
          className,
        )}
      />
    )
  },
)

Icon.displayName = 'Icon'
