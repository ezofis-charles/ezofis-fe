import type { ChangeEvent, ReactNode } from 'react'
import { PasswordInput as Base } from '@mantine/core'
import { forwardRef } from 'react'
import type { InputProps } from '../input.types'
import { InputLabel } from '../input-label'
import { classNames, inputWrapperOrder } from '../input.constants'
import { VisibilityToggleIcon } from './visibility-toggle-icon'

interface Props extends Omit<
  InputProps,
  'clearable' | 'placeholder' | 'readOnly'
> {
  value: string
  leftSection?: ReactNode
  placeholder?: string
  onBlur?: () => void
  onChange: (value: string) => void
}

const InputPassword = forwardRef<HTMLInputElement, Props>(
  (
    {
      description,
      label,
      optional,
      placeholder,
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      onChange(e.currentTarget.value)

    return (
      <Base
        {...rest}
        description={rest.error ? undefined : description}
        inputWrapperOrder={inputWrapperOrder}
        label={_label}
        placeholder={placeholder}
        ref={ref}
        value={value}
        visibilityToggleIcon={VisibilityToggleIcon}
        classNames={{
          description: classNames.description,
          error: classNames.error,
          innerInput: 'placeholder:font-normal placeholder:text-gray-8',
          input: classNames.input,
          label: classNames.label,
          visibilityToggle: 'group size-6 hover:bg-gray-4',
          wrapper: classNames.wrapper,
        }}
        onChange={handleChange}
      />
    )
  },
)

InputPassword.displayName = 'InputPassword'
export { InputPassword }
