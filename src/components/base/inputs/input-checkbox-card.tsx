import type { ReactNode } from 'react'
import { Checkbox as Base } from '@mantine/core'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import { InputCheckboxIndicator } from './input-checkbox-indicator'

interface Props {
  checked?: boolean
  children?: ReactNode
  className?: string
  description?: string
  disabled?: boolean
  icon?: string
  label?: string
  labelSlot?: ReactNode
  value?: string
  onClick?: () => void
}

export const InputCheckboxCard = ({
  checked = false,
  children,
  className,
  description,
  disabled,
  icon,
  label,
  labelSlot,
  value,
  onClick,
}: Props) => {
  return (
    <Base.Card
      checked={checked}
      disabled={disabled}
      radius='md'
      value={value}
      className={cn(
        'rounded border-gray-4 bg-surface-raised p-4 outline-primary-8 disabled:pointer-events-none disabled:opacity-50 data-checked:border-primary-9',
        className,
      )}
      onClick={onClick}
    >
      {children && children}
      {!children && (
        <div className='flex items-center gap-3'>
          {icon && (
            <div className='flex size-12 items-center justify-center rounded-full bg-gray-3 text-gray-11'>
              <Icon className='lg:size-5' name={icon} />
            </div>
          )}

          <div
            className={cn(
              'flex size-5 items-center justify-center',
              icon && 'order-last',
              !icon && 'self-start',
            )}
          >
            <InputCheckboxIndicator checked={checked} />
          </div>

          <div className='flex-1 space-y-1 text-micro'>
            {labelSlot}
            {label && (
              <div
                className={cn(
                  'font-medium',
                  description ? 'text-gray-13' : 'text-gray-12',
                )}
              >
                {label}
              </div>
            )}
            {description && (
              <div className='text-pretty text-gray-10'>{description}</div>
            )}
          </div>
        </div>
      )}
    </Base.Card>
  )
}
