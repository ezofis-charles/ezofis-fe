import { cn } from '@/utils/cn'

export type BadgeColor =
  | 'blue'
  | 'bronze'
  | 'gold'
  | 'gray'
  | 'green'
  | 'indigo'
  | 'orange'
  | 'pink'
  | 'primary'
  | 'red'
  | 'secondary'
  | 'violet'
  | 'yellow'

interface Props {
  className?: string
  color?: BadgeColor
  label?: string
}

const colorClassName: Record<BadgeColor, string> = {
  blue: 'bg-blue-4 text-blue-11',
  bronze: 'bg-bronze-4 text-bronze-11',
  gold: 'bg-gold-4 text-gold-11',
  gray: 'bg-gray-4 text-gray-12',
  green: 'bg-green-4 text-green',
  indigo: 'bg-indigo-4 text-indigo-11',
  orange: 'bg-orange-4 text-orange-11',
  pink: 'bg-pink-4 text-pink-11',
  primary: 'bg-primary-4 text-primary',
  red: 'bg-red-4 text-red',
  secondary: 'bg-secondary-4 text-secondary',
  violet: 'bg-violet-4 text-violet-11',
  yellow: 'bg-yellow-4 text-yellow-11',
}

export const Badge = ({ className, color = 'gray', label }: Props) => {
  const _className = cn(
    'inline-flex h-6 w-fit shrink-0 items-center justify-center rounded px-2 text-12 font-medium whitespace-nowrap',
    colorClassName[color],
    className,
  )

  return <span className={_className}>{label}</span>
}
