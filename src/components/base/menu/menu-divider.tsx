import { Menu as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  className?: string
}

export const MenuDivider = ({ className }: Props) => {
  return <Base.Divider className={cn('my-1.5 border-gray-4', className)} />
}
