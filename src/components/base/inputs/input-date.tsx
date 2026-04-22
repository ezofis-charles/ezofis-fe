import { DateInput as Base } from '@mantine/dates'
import { forwardRef } from 'react'
import { ButtonClose } from '@/components/base/button'
import { Icon } from '@/components/base/icon'
import type { InputProps } from './input-types'
import { classNames, inputWrapperOrder } from './input-constants'
import { InputLabel } from './input-label'

interface Props extends Omit<
  InputProps,
  | 'leftSection'
  | 'leftSectionPointerEvents'
  | 'rightSection'
  | 'rightSectionPointerEvents'
> {
  value: null | string
  maxDate?: string
  minDate?: string
  valueFormat?: string
  onChange: (value: null | string) => void
}

const InputDate = forwardRef<HTMLInputElement, Props>(
  (
    {
      clearable,
      description,
      label,
      optional,
      placeholder = 'dd-mmm-yyyy',
      required,
      tooltip,
      tooltipWidth,
      value,
      valueFormat = 'DD-MMM-YYYY',
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
      <ButtonClose size='xs' onClick={() => onChange(null)} />
    ) : (
      <Icon className='text-gray-9' name='tabler:calendar' />
    )

    const _previousIcon = <Icon name='tabler:chevron-left' />
    const _nextIcon = <Icon name='tabler:chevron-right' />

    return (
      <Base
        {...rest}
        description={rest.error ? undefined : description}
        firstDayOfWeek={0}
        inputWrapperOrder={inputWrapperOrder}
        label={_label}
        nextIcon={_nextIcon}
        placeholder={placeholder}
        previousIcon={_previousIcon}
        ref={ref}
        rightSection={_rightSection}
        rightSectionPointerEvents={_clearable ? 'auto' : 'none'}
        type='default'
        value={value}
        valueFormat={valueFormat}
        allowDeselect
        classNames={{
          calendarHeaderControl:
            'hover:bg-gray-4 hover:text-gray-12 text-gray transition-colors data-[disabled]:opacity-50',
          calendarHeaderLevel:
            'hover:bg-gray-4 hover:text-gray-12 text-14 font-semibold text-gray transition-colors xl:text-13',
          day: 'hover:bg-gray-4 hover:text-gray-12 data-[outside]:text-gray-8 data-[outside]:hover:text-gray-12 data-[today]:bg-primary-4 text-14 text-gray transition-colors data-[outside]:opacity-100 data-[selected]:!bg-primary data-[selected]:!font-medium data-[selected]:!text-white data-[today]:font-medium data-[today]:text-primary xl:text-13',
          description: classNames.description,
          error: classNames.error,
          input: classNames.input,
          label: classNames.label,
          monthsListControl:
            'hover:bg-gray-4 hover:text-gray-12 text-gray transition-colors data-[disabled]:opacity-50 data-[selected]:!bg-primary data-[selected]:!font-medium data-[selected]:!text-white',
          weekday: 'text-gray-10 p-2 text-14 xl:text-13',
          wrapper: classNames.wrapper,
          yearsListControl:
            'hover:bg-gray-4 hover:text-gray-12 text-gray transition-colors data-[disabled]:opacity-50 data-[selected]:!bg-primary data-[selected]:!font-medium data-[selected]:!text-white',
        }}
        popoverProps={{
          classNames: {
            dropdown:
              'border border-gray-4 bg-surface-raised p-3 rounded-lg shadow-xl',
          },
        }}
        onChange={onChange}
      />
    )
  },
)

InputDate.displayName = 'InputDate'
export { InputDate }
