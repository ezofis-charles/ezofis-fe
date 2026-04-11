import { cn } from '@/utils/cn'
import { Icon } from './icon'

interface Props {
  className?: string
}

export const IconSpinner = ({ className }: Props) => {
  return (
    <Icon
      className={cn('size-12 animate-spin text-primary-11', className)}
      name='fa:spinner'
    />
  )
}
