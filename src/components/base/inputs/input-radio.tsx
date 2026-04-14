import type { ChangeEvent } from 'react'
import { Radio as Base } from '@mantine/core'
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SelectionProps as Props } from './input-types'

const InputRadio = forwardRef<HTMLInputElement, Props>(
  ({ className, error, onChange, ...rest }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      onChange?.(e.currentTarget.checked)

    return (
      <Base
        {...rest}
        className={cn(rest.disabled && 'opacity-50', className)}
        ref={ref}
        size='xs'
        classNames={{
          description: 'mt-1 pl-2 text-micro text-balance text-gray-10',
          icon: 'text-white',
          inner: 'flex size-5 items-center justify-center',
          label: 'pl-2 text-micro/5 font-medium text-gray-12',
          radio: cn(
            'border-gray-8 bg-surface-raised checked:border-primary-9 checked:bg-primary-9 focus-within:outline-primary-8 disabled:opacity-50',
            Boolean(error) && 'border-red-9',
          ),
        }}
        onChange={handleChange}
      />
    )
  },
)

InputRadio.displayName = 'InputRadio'
export { InputRadio }
