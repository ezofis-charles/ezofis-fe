import type { ReactNode } from 'react'
import { Combobox as Base, Input, InputBase } from '@mantine/core'
import { forwardRef, useMemo } from 'react'
import type { Option } from '@/types/option'
import { ButtonClose } from '@/components/base/button/button-close'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import type { InputProps, SelectVariant } from '../input-types'
import { classNames, inputWrapperOrder } from '../input-constants'
import { InputLabel } from '../input-label'

interface Props extends InputProps {
  value: Option[]
  leftSection?: ReactNode
  loading?: boolean
  variant?: SelectVariant
  onChange: (value: Option[]) => void
  onClick: () => void
}

const ComboboxTarget = forwardRef<HTMLButtonElement, Props>(
  (
    {
      clearable,
      description,
      label,
      loading,
      optional,
      placeholder,
      readOnly,
      required,
      tooltip,
      tooltipWidth,
      value,
      variant = 'single',
      onChange,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const [firstValue, counter] = useMemo(() => {
      const first = value[0] || null
      const count = value.length > 1 ? value.length - 1 : null
      return [first, count]
    }, [value])

    const _label = label ? (
      <InputLabel
        label={label}
        optional={optional}
        required={required}
        tooltip={tooltip}
        tooltipWidth={tooltipWidth}
      />
    ) : undefined

    const _rightSection = loading ? (
      <Icon className='animate-spin text-gray-10' name='fa:spinner' />
    ) : clearable && value.length > 0 ? (
      <ButtonClose size='xs' onClick={() => onChange([])} />
    ) : (
      <Icon className='text-gray-10' name='tabler:chevron-down' />
    )

    const children = useMemo(() => {
      if (value.length === 0) {
        return (
          <Input.Placeholder className='font-normal text-gray-8'>
            {placeholder || 'Select'}
          </Input.Placeholder>
        )
      }

      if (variant === 'single') {
        return (
          <div className='text-14 font-medium text-gray-12 xl:text-13'>
            {firstValue?.name}
          </div>
        )
      }

      return (
        <div className='flex h-9 items-center gap-1 py-1'>
          <div className='truncate rounded bg-gray-4 px-2 py-0.5 text-14 font-medium whitespace-nowrap text-gray-12 xl:text-13'>
            {firstValue?.name}
          </div>
          {counter && (
            <div className='rounded bg-gray-4 px-2 py-0.5 text-14 font-medium whitespace-nowrap text-gray-12 xl:text-13'>
              +{counter}
            </div>
          )}
        </div>
      )
    }, [value, variant, firstValue, counter, placeholder])

    return (
      <Base.Target>
        <InputBase
          {...rest}
          component='button'
          description={rest.error ? undefined : description}
          inputWrapperOrder={inputWrapperOrder}
          label={_label}
          ref={ref}
          rightSection={_rightSection}
          rightSectionPointerEvents={clearable ? 'auto' : 'none'}
          type='button'
          pointer
          classNames={{
            description: classNames.description,
            error: classNames.error,
            input: cn(classNames.input, readOnly && 'border-dashed'),
            label: classNames.label,
            wrapper: classNames.wrapper,
          }}
          onClick={readOnly ? undefined : onClick}
        >
          {children}
        </InputBase>
      </Base.Target>
    )
  },
)

ComboboxTarget.displayName = 'ComboboxTarget'
export { ComboboxTarget }
