import logoMark from '@/assets/logo/mark.png'
import logoText from '@/assets/logo/text.png'
import { cn } from '@/utils/cn'

interface Props {
  className?: string
  hideText?: boolean
  markClassName?: string
  textClassName?: string
}

export const Logo = ({
  className,
  hideText = false,
  markClassName,
  textClassName,
}: Props) => {
  return (
    <div className={cn('flex h-9 items-center gap-1', className)}>
      <img
        alt='logo mark'
        className={cn('size-9', markClassName)}
        src={logoMark}
      />

      {!hideText && (
        <img
          alt='logo text'
          className={cn('h-7', textClassName)}
          src={logoText}
        />
      )}
    </div>
  )
}
