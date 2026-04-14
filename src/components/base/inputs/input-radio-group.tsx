import { Radio as Base } from '@mantine/core'
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SelectionGroupProps } from './input-types'
import { InputLabel } from './input-label'
import { InputRadio } from './input-radio'
import {
  classNames,
  inputWrapperOrder,
  OptionsPerLineClass,
} from './input-constants'

interface Props extends SelectionGroupProps {
  value: null | string
  onChange: (value: string) => void
}

const InputRadioGroup = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      description,
      disabled,
      error,
      label,
      optional,
      options,
      optionsPerLine,
      required,
      tooltip,
      tooltipWidth,
      value,
      onChange,
    },
    ref,
  ) => {
    const _value = value ? String(value) : ''
    const optionsPerLineClass = OptionsPerLineClass[optionsPerLine ?? 1]
    const handleChange = (value: string) => onChange(value)

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
      <Base.Group
        className={className}
        description={error ? undefined : description}
        inputWrapperOrder={inputWrapperOrder}
        label={_label}
        ref={ref}
        size='xs'
        value={_value}
        classNames={{
          description: classNames.description,
          error: classNames.error,
          label: classNames.label,
        }}
        onChange={handleChange}
      >
        <div className={cn('grid gap-x-4 gap-y-4 py-2', optionsPerLineClass)}>
          {options.map((option) => (
            <InputRadio
              description={option.description}
              disabled={disabled || option.disabled}
              error={error}
              key={option.id}
              label={option.name}
              value={String(option.id)}
            />
          ))}
        </div>
      </Base.Group>
    )
  },
)

InputRadioGroup.displayName = 'InputRadioGroup'
export { InputRadioGroup }
