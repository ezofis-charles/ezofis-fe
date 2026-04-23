import { cn } from '@/utils/cn'
import { Icon } from './icon'

interface Props {
  className?: string
}

export const IconSpinner = ({ className }: Props) => {
  return (
    <Icon
      className={cn('size-8 animate-spin text-primary-9 xl:size-8', className)}
      name='fa:spinner'
    />
  )
}
