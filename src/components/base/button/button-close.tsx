import type { ButtonSize } from './button.types'
import { ButtonIcon } from './button-icon'

interface Props {
  className?: string
  size?: ButtonSize
  onClick: () => void
}

export const ButtonClose = ({ className, size, onClick }: Props) => {
  return (
    <ButtonIcon
      ariaLabel='Close'
      className={className}
      color='gray'
      icon='tabler:x'
      size={size}
      variant='ghost'
      onClick={onClick}
    />
  )
}
