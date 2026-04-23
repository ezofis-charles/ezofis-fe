import type { ComponentProps, ReactNode } from 'react'
import { forwardRef } from 'react'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import type { ButtonColor, ButtonSize, ButtonVariant } from './button-types'
import { getVariantClassName } from './button-styles'

interface Props extends ComponentProps<'button'> {
  ariaLabel?: string
  children?: ReactNode
  className?: string
  color?: ButtonColor
  disabled?: boolean
  icon?: string
  iconClassName?: string
  loading?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

const sizeClassName: Record<ButtonSize, string> = {
  xs: 'size-7 xl:size-6',
  sm: 'size-8 xl:size-7',
  md: 'size-9 xl:size-8',
  lg: 'size-10 xl:size-9',
}

export const ButtonIcon = forwardRef<HTMLButtonElement, Props>(
  (
    {
      ariaLabel,
      children,
      className,
      color = 'primary',
      disabled,
      icon,
      iconClassName,
      loading,
      size = 'md',
      variant = 'solid',
      ...props
    },
    ref,
  ) => {
    const variantClassName = getVariantClassName(variant, color)
    const mergedClassName = cn(
      variantClassName,
      sizeClassName[size],
      'justify-center',
      className,
    )

    return (
      <button
        aria-label={ariaLabel}
        className={mergedClassName}
        data-loading={loading || undefined}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
        {icon && (
          <Icon
            className={cn(loading && 'animate-spin', iconClassName)}
            name={loading ? 'fa:spinner' : icon}
          />
        )}
      </button>
    )
  },
)

ButtonIcon.displayName = 'ButtonIcon'
