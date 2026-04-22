import { Menu as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  className?: string
}

export const MenuDivider = ({ className }: Props) => {
  return <Base.Divider className={cn('border-gray-4 my-1.5', className)} />
}
