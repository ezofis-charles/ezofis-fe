import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'

type IconColor = 'green' | 'primary' | 'red' | 'secondary'

interface Props {
  text: string
  className?: string
  color?: IconColor
}

const colorClassNames: Record<IconColor, string> = {
  green: 'bg-green-3 text-green',
  primary: 'bg-primary-3 text-primary',
  red: 'bg-red-3 text-red',
  secondary: 'bg-secondary-3 text-secondary',
}

const colorIconNames: Record<IconColor, string> = {
  green: 'tabler:circle-check',
  primary: 'tabler:info-circle',
  red: 'tabler:alert-hexagon',
  secondary: 'tabler:info-circle',
}

export const Alert = ({ className, color = 'primary', text }: Props) => {
  return (
    <div
      className={cn(
        'flex min-h-9 items-center gap-2 rounded border border-none px-3 py-2',
        colorClassNames[color],
        className,
      )}
    >
      <Icon name={colorIconNames[color]} />
      <div className='text-14 font-medium xl:text-13'>{text}</div>
    </div>
  )
}
