import { Switch as Base } from '@mantine/core'
import { forwardRef } from 'react'
import { cn } from '@/utils/cn'
import type { SelectionGroupProps } from './input.types'
import { InputLabel } from './input-label'
import { InputSwitch } from './input-switch'
import {
  classNames,
  inputWrapperOrder,
  OptionsPerLineClass,
} from './input.constants'

interface Props extends SelectionGroupProps {
  value: string[]
  onChange: (value: string[]) => void
}

const InputSwitchGroup = forwardRef<HTMLInputElement, Props>(
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
    const optionsPerLineClass = OptionsPerLineClass[optionsPerLine ?? 1]
    const normalizedValue = value

    const _label = label ? (
      <InputLabel
        label={label}
        optional={optional}
        required={required}
        tooltip={tooltip}
        tooltipWidth={tooltipWidth}
      />
    ) : undefined

    const handleChange = (selected: string[]) => {
      onChange(selected)
    }

    return (
      <Base.Group
        className={className}
        description={error ? undefined : description}
        error={error}
        inputWrapperOrder={inputWrapperOrder}
        label={_label}
        ref={ref}
        size='xs'
        value={normalizedValue}
        classNames={{
          description: classNames.description,
          error: classNames.error,
          label: classNames.label,
        }}
        onChange={handleChange}
      >
        <div className={cn('grid gap-x-4 gap-y-4 py-2', optionsPerLineClass)}>
          {options.map((option) => (
            <InputSwitch
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

InputSwitchGroup.displayName = 'InputSwitchGroup'
export { InputSwitchGroup }
