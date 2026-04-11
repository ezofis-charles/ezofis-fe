import { Divider as Base } from '@mantine/core'

interface Props {
  className?: string
  label?: string
  labelPosition?: 'center' | 'left' | 'right'
  orientation?: 'horizontal' | 'vertical'
}

export const Divider = ({
  className,
  label,
  labelPosition,
  orientation,
}: Props) => {
  return (
    <Base
      className={className}
      label={label}
      labelPosition={labelPosition}
      orientation={orientation}
      classNames={{
        label:
          'text-micro text-gray-11 before:border-gray-4 after:border-gray-4',
        root: 'border-gray-4',
      }}
    />
  )
}
