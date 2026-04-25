import type { ReactNode } from 'react'
import { Radio as Base } from '@mantine/core'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import { InputRadioIndicator } from './input-radio-indicator'

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

export const InputRadioCard = ({
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
        'rounded border-gray-4 bg-surface p-3 outline-primary-8 disabled:pointer-events-none disabled:opacity-50 data-checked:border-primary-8',
        className,
      )}
      onClick={onClick}
    >
      {children && children}
      {!children && (
        <div className='flex items-center gap-3'>
          {icon && (
            <div className='flex size-10 items-center justify-center rounded-full bg-gray-3 text-gray-11'>
              <Icon className='size-5 xl:size-5' name={icon} />
            </div>
          )}

          <div
            className={cn(
              'flex size-5 items-center justify-center',
              icon && 'order-last',
              !icon && 'self-start',
            )}
          >
            <InputRadioIndicator checked={checked} />
          </div>

          <div className='flex-1 space-y-1 text-14 xl:text-13'>
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
