import type { ReactNode } from 'react'
import { Accordion as Base } from '@mantine/core'
import { Icon } from '@/components/base/icon'

interface Props {
  children: ReactNode
  value: string
  className?: string
  disabled?: boolean
  header?: ReactNode
  icon?: string
  label?: string
}

export const AccordionItem = ({
  children,
  className,
  disabled,
  header,
  icon,
  label,
  value,
}: Props) => {
  return (
    <Base.Item className={className} value={value}>
      <Base.Control disabled={disabled}>
        <div className='flex items-center gap-4'>
          {header}
          {icon && <Icon className='text-gray' name={icon} />}
          {label && (
            <div className='text-14 font-medium text-gray-900 xl:text-13/6'>
              {label}
            </div>
          )}
        </div>
      </Base.Control>
      <Base.Panel>{children}</Base.Panel>
    </Base.Item>
  )
}
