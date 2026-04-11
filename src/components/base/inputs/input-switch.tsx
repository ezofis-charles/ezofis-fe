import type { ChangeEvent } from 'react'
import { Switch as Base } from '@mantine/core'
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SelectionProps as Props } from './input.types'

const InputSwitch = forwardRef<HTMLInputElement, Props>(
  ({ className, error, onChange, ...rest }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      onChange?.(e.currentTarget.checked)

    return (
      <Base
        {...rest}
        className={cn(rest.disabled && 'opacity-50', className)}
        ref={ref}
        size='xs'
        withThumbIndicator={false}
        classNames={{
          body: 'inline-flex',
          description: 'mt-1 pl-2 text-micro text-gray-10',
          input: 'peer',
          label: 'pl-2 text-micro/5 font-medium text-gray-12',
          labelWrapper: 'data-[disabled]:opacity-50',
          thumb: 'bg-white shadow-sm',
          track: cn(
            'mt-0.5 bg-gray-6 peer-checked:bg-primary-9 focus-within:outline-primary-8',
            Boolean(error) && 'border border-red-9',
          ),
        }}
        onChange={handleChange}
      />
    )
  },
)

InputSwitch.displayName = 'InputSwitch'
export { InputSwitch }
