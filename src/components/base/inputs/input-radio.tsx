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
          description: 'text-gray-10 mt-1 pl-2 text-14 text-balance xl:text-13',
          icon: 'text-white',
          inner: 'flex size-5 items-center justify-center',
          label: 'text-gray-12 pl-2 text-14 font-medium xl:text-13/5',
          radio: cn(
            'border-gray-8 focus-within:outline-primary-8 bg-surface-raised checked:border-primary checked:bg-primary disabled:opacity-50',
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
