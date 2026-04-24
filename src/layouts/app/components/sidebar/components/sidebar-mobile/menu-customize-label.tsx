import { cn } from '@/utils/cn'

interface Props {
  label: string
  className?: string
}

export const MenuCustomizeLabel = ({ className, label }: Props) => {
  return (
    <div
      className={cn(
        'px-4 py-2 text-12 font-medium whitespace-nowrap text-gray-10',
        className,
      )}
    >
      {label}
    </div>
  )
}
