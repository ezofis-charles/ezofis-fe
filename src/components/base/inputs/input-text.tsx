import type { ChangeEvent, ReactNode } from 'react'
import { TextInput as Base } from '@mantine/core'
import { forwardRef } from 'react'
import { ButtonClose } from '@/components/base/button'
import type { InputProps } from './input-types'
import { classNames, inputWrapperOrder } from './input-constants'
import { InputLabel } from './input-label'

interface Props extends InputProps {
  value: string
  leftSection?: ReactNode
  leftSectionPointerEvents?: 'auto' | 'none'
  rightSection?: ReactNode
  rightSectionPointerEvents?: 'auto' | 'none'
  onBlur?: () => void
  onChange: (value: string) => void
}

const InputText = forwardRef<HTMLInputElement, Props>(
  (
    {
      clearable,
      description,
      label,
      optional,
      required,
      rightSection,
      rightSectionPointerEvents = 'none',
      tooltip,
      tooltipWidth,
      value,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const _clearable = clearable && value
    const _rightSection = _clearable ? (
      <ButtonClose size='xs' onClick={() => onChange('')} />
    ) : (
      rightSection
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      onChange(e.currentTarget.value)

    return (
      <Base
        {...rest}
        description={rest.error ? undefined : description}
        inputWrapperOrder={inputWrapperOrder}
        label={_label}
        ref={ref}
        rightSection={_rightSection}
        value={value}
        classNames={{
          description: classNames.description,
          error: classNames.error,
          input: classNames.input,
          label: classNames.label,
          wrapper: classNames.wrapper,
        }}
        rightSectionPointerEvents={
          _clearable ? 'auto' : rightSectionPointerEvents
        }
        onChange={handleChange}
      />
    )
  },
)

InputText.displayName = 'InputText'
export { InputText }
