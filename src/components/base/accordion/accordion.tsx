import type { ReactNode } from 'react'
import { Accordion as Base } from '@mantine/core'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'

interface Props {
  children?: ReactNode
  className?: string
  defaultOpen?: null | string | string[]
  multiple?: boolean
  variant?: 'contained' | 'default' | 'separated'
}

export const Accordion = ({
  children,
  className,
  defaultOpen,
  multiple,
  variant = 'default',
}: Props) => {
  const controlClassName = {
    contained: 'hover:bg-gray-3 p-2',
    default: 'hover:bg-transparent hover:underline px-0 py-2',
    separated: 'hover:bg-gray-3 p-2',
  }

  return (
    <Base
      chevron={<Icon className='text-gray-10' name='tabler:chevron-down' />}
      className={className}
      defaultValue={defaultOpen}
      multiple={multiple}
      variant={variant}
      classNames={{
        content: variant === 'default' ? 'px-0 py-2' : 'p-2',
        control: cn('outline-primary-8', controlClassName[variant]),
        item: 'border-gray-4 bg-transparent',
        label: 'p-0',
        panel: 'p-0',
      }}
    >
      {children}
    </Base>
  )
}
