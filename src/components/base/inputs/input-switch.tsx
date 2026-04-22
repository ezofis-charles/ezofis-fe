import type { ChangeEvent } from 'react'
import { Switch as Base } from '@mantine/core'
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SelectionProps as Props } from './input-types'

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
          description: 'text-gray-10 mt-1 pl-2 text-14 xl:text-13',
          input: 'peer',
          label: 'text-gray-12 pl-2 text-14 font-medium xl:text-13/5',
          labelWrapper: 'data-[disabled]:opacity-50',
          thumb: 'bg-white shadow-sm',
          track: cn(
            'bg-gray-6 focus-within:outline-primary-8 mt-0.5 peer-checked:bg-primary',
            Boolean(error) && 'border-red-9 border',
          ),
        }}
        onChange={handleChange}
      />
    )
  },
)

InputSwitch.displayName = 'InputSwitch'
export { InputSwitch }
