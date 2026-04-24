import { Progress as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

type ProgressColor = 'green' | 'primary' | 'red' | 'secondary'

interface Props {
  value: number
  animated?: boolean
  className?: string
  color?: ProgressColor
  rounded?: boolean
  size?: number
  striped?: boolean
}

const colorClassNames: Record<ProgressColor, string> = {
  green: 'bg-green-9',
  primary: 'bg-primary-9',
  red: 'bg-red-9',
  secondary: 'bg-secondary-9',
}

export const Progress = ({
  animated,
  className,
  color = 'primary',
  rounded = true,
  size = 8,
  striped,
  value,
}: Props) => {
  return (
    <Base
      animated={animated}
      className={className}
      size={size}
      striped={striped}
      value={value}
      classNames={{
        root: cn('bg-gray-4', rounded ? 'rounded' : 'rounded-none'),
        section: cn(
          colorClassNames[color],
          rounded ? 'rounded' : 'rounded-none',
        ),
      }}
    />
  )
}
