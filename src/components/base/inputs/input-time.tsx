import { TimePicker as Base } from '@mantine/dates'
import { forwardRef } from 'react'
import { ButtonClose } from '@/components/base/button'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import type { InputProps } from './input-types'
import { classNames, inputWrapperOrder } from './input-constants'
import { InputLabel } from './input-label'

interface Props extends Omit<
  InputProps,
  | 'leftSection'
  | 'leftSectionPointerEvents'
  | 'placeholder'
  | 'rightSection'
  | 'rightSectionPointerEvents'
> {
  value: string
  format?: '12h' | '24h'
  maxTime?: string
  minTime?: string
  onChange: (value: string) => void
}

const InputTime = forwardRef<HTMLInputElement, Props>(
  (
    {
      clearable,
      description,
      error,
      label,
      maxTime,
      minTime,
      optional,
      required,
      tooltip,
      tooltipWidth,
      value,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const _label = label ? (
      <InputLabel
        label={label}
        optional={optional}
        required={required}
        tooltip={tooltip}
        tooltipWidth={tooltipWidth}
      />
    ) : undefined

    const _clearable = clearable && value
    const _rightSection = _clearable ? (
      <ButtonClose size='xs' onClick={() => onChange('')} />
    ) : (
      <Icon className='text-gray-9' name='tabler:clock' />
    )

    return (
      <Base
        {...rest}
        description={error ? undefined : description}
        error={error}
        inputWrapperOrder={inputWrapperOrder}
        label={_label}
        max={maxTime}
        min={minTime}
        ref={ref}
        rightSection={_rightSection}
        rightSectionPointerEvents={_clearable ? 'auto' : 'none'}
        value={value}
        withDropdown
        classNames={{
          control:
            'hover:bg-gray-4 hover:text-gray-12 text-14 text-gray transition-colors data-[active]:!bg-primary data-[active]:!font-medium data-[active]:!text-white xl:text-13',
          description: classNames.description,
          dropdown:
            'border-gray-4 rounded-lg border bg-surface-raised shadow-xl',
          error: classNames.error,
          field: cn(
            'placeholder:text-gray-8 focus:bg-primary focus:text-white focus:placeholder:text-white',
            !!error && 'text-gray-12',
          ),
          fieldsGroup: value ? 'text-gray-12' : 'text-gray-8',
          input: classNames.input,
          label: classNames.label,
          wrapper: classNames.wrapper,
        }}
        onChange={onChange}
      />
    )
  },
)

InputTime.displayName = 'InputTime'
export { InputTime }
