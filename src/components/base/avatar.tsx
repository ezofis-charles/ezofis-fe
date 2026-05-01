import { Avatar as Base } from '@mantine/core'
import { cn } from '@/utils/cn'

interface Props {
  initials: string
  className?: string
  image?: string
  imageLabel?: string
  size?: number
}

export const Avatar = ({
  className,
  image,
  imageLabel = 'avatar',
  initials,
  size = 32,
}: Props) => {
  return (
    <Base
      alt={imageLabel}
      size={size}
      src={image}
      classNames={{
        placeholder: cn(
          'border border-gray-5 bg-gray-4 text-13 font-semibold text-gray-11',
          className,
        ),
      }}
    >
      {initials}
    </Base>
  )
}
