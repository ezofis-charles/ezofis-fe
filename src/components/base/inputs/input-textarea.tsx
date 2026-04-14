import type { ChangeEvent } from 'react'
import { Textarea as Base } from '@mantine/core'
import { forwardRef, useState } from 'react'
import { cn } from '@/utils/cn'
import type { InputProps } from './input-types'
import { InputLabel } from './input-label'
import { classNames, inputWrapperOrder } from './input-constants'

interface Props extends InputProps {
  value: string
  autosize?: boolean
  maxLength?: number
  maxRows?: number
  minRows?: number
  resize?: 'both' | 'none' | 'vertical'
  rows?: number
  onChange: (value: string) => void
}

const InputTextarea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      autosize,
      description,
      label,
      maxLength,
      maxRows,
      minRows = 3,
      optional,
      required,
      resize,
      rows = 3,
      tooltip,
      tooltipWidth,
      value,
      onChange,
      ...rest
    },
    ref,
  ) => {
    const [length, setLength] = useState(0)

    const _label = label ? (
      <InputLabel
        label={label}
        optional={optional}
        required={required}
        tooltip={tooltip}
        tooltipWidth={tooltipWidth}
      />
    ) : undefined

    const getDescription = () => {
      if (rest.error) {
        return undefined
      }

      if (maxLength) {
        return `${length}/${maxLength}`
      }
      return description
    }

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.currentTarget.value)

      if (maxLength) {
        setLength(e.currentTarget.value.length)
      }
    }

    return (
      <Base
        {...rest}
        autosize={autosize}
        description={getDescription()}
        inputWrapperOrder={inputWrapperOrder}
        label={_label}
        maxRows={maxRows}
        minRows={minRows}
        ref={ref}
        resize={resize}
        rows={rows}
        value={value}
        classNames={{
          description: classNames.description,
          error: classNames.error,
          input: cn(
            classNames.input,
            'py-1 group-data-[size=sm]:h-auto group-data-[size=sm]:min-h-auto',
          ),
          label: classNames.label,
          wrapper: classNames.wrapper,
        }}
        onChange={handleChange}
      />
    )
  },
)

InputTextarea.displayName = 'InputTextarea'
export { InputTextarea }
