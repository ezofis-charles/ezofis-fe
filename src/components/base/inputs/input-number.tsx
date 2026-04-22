import { NumberInput as Base } from '@mantine/core'
import { forwardRef } from 'react'
import { ButtonClose } from '@/components/base/button'
import type { InputProps } from './input-types'
import { classNames, inputWrapperOrder } from './input-constants'
import { InputLabel } from './input-label'

interface Props extends InputProps {
  value: number | string
  allowDecimal?: boolean
  decimalScale?: number
  prefix?: string
  suffix?: string
  thousandSeparator?: boolean | string
  thousandsGroupStyle?: 'lakh' | 'none' | 'thousand' | 'wan'
  withControls?: boolean
  onChange: (value: number | string) => void
}

const InputNumber = forwardRef<HTMLInputElement, Props>(
  (
    {
      clearable,
      description,
      label,
      optional,
      required,
      tooltip,
      tooltipWidth,
      value,
      withControls,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const _clearable = clearable && value
    const _rightSection = _clearable && (
      <ButtonClose className='mr-2' size='sm' onClick={() => onChange('')} />
    )

    const _label = label ? (
      <InputLabel
        label={label}
        optional={optional}
        required={required}
        tooltip={tooltip}
        tooltipWidth={tooltipWidth}
      />
    ) : undefined

    return (
      <Base
        {...rest}
        description={rest.error ? undefined : description}
        hideControls={!withControls}
        inputWrapperOrder={inputWrapperOrder}
        label={_label}
        ref={ref}
        rightSection={_rightSection}
        rightSectionPointerEvents={withControls || _clearable ? 'auto' : 'none'}
        value={value}
        classNames={{
          control:
            'border-gray-5 hover:bg-gray-4 hover:text-gray-12 text-gray transition-colors',
          description: classNames.description,
          error: classNames.error,
          input: classNames.input,
          label: classNames.label,
          wrapper: classNames.wrapper,
        }}
        onChange={onChange}
      />
    )
  },
)

InputNumber.displayName = 'InputNumber'
export { InputNumber }
