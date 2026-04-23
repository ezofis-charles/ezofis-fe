import type { ChangeEvent } from 'react'
import { Checkbox as Base } from '@mantine/core'
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SelectionProps } from './input-types'

interface Props extends SelectionProps {
  indeterminate?: boolean
  labelClassName?: string
}

const InputCheckbox = forwardRef<HTMLInputElement, Props>(
  (
    { className, error, indeterminate, labelClassName, onChange, ...rest },
    ref,
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      onChange?.(e.currentTarget.checked)

    return (
      <Base
        {...rest}
        className={cn(rest.disabled && 'opacity-50', className)}
        indeterminate={indeterminate}
        ref={ref}
        size='xs'
        classNames={{
          description: 'mt-1 pl-2 text-14 text-gray-10 xl:text-13',
          icon: 'w-[50%] text-white',
          inner: 'flex size-5 items-center justify-center',
          input: cn(
            'checked:border-primary checked:bg-primary data-[indeterminate]:border-primary data-[indeterminate]:bg-primary rounded-[3px] border-gray-8 bg-surface focus-within:outline-primary-8 disabled:opacity-50',
            Boolean(error) && 'border-red-9',
          ),
          label: cn(
            'pl-2 text-14 font-medium text-gray-12 xl:text-13/5',
            labelClassName,
          ),
        }}
        onChange={handleChange}
      />
    )
  },
)

InputCheckbox.displayName = 'InputCheckbox'
export { InputCheckbox }
