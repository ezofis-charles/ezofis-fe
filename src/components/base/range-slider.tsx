import type { RangeSliderProps as BaseProps } from '@mantine/core'
import { RangeSlider as Base } from '@mantine/core'

interface Props {
  value: BaseProps['value']
  className?: string
  disabled?: boolean
  domain?: BaseProps['domain']
  marks?: BaseProps['marks']
  max?: number
  min?: number
  minRange?: number
  step?: number
  onChange: BaseProps['onChange']
}

export const RangeSlider = ({
  className,
  disabled,
  domain,
  marks,
  max,
  min,
  minRange,
  step,
  value,
  onChange,
}: Props) => {
  return (
    <Base
      className={className}
      disabled={disabled}
      domain={domain}
      marks={marks}
      max={max}
      min={min}
      minRange={minRange}
      step={step}
      value={value}
      classNames={{
        bar: 'bg-primary',
        label: 'rounded bg-primary text-white',
        mark: 'border-gray-4 bg-white data-filled:border-primary',
        markLabel: 'text-12/6 text-gray',
        thumb: 'border-primary bg-white shadow',
        track: 'before:bg-gray-4',
        trackContainer: 'data-disabled:opacity-50',
      }}
      onChange={onChange}
    />
  )
}
