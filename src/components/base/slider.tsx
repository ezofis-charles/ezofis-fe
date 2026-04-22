import type { SliderProps as BaseProps } from '@mantine/core'
import { Slider as Base } from '@mantine/core'

interface Props {
  value: number
  className?: string
  disabled?: boolean
  domain?: BaseProps['domain']
  marks?: BaseProps['marks']
  max?: number
  min?: number
  step?: number
  onChange: (value: number) => void
}

export const Slider = ({
  className,
  disabled,
  domain,
  marks,
  max,
  min,
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
