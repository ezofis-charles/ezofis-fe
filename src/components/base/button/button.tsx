import type { ComponentProps, ReactNode } from 'react'
import { forwardRef } from 'react'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'
import type { ButtonColor, ButtonSize, ButtonVariant } from './button-types'
import { getVariantClassName } from './button-styles'

interface Props extends ComponentProps<'button'> {
  children?: ReactNode
  className?: string
  color?: ButtonColor
  icon?: string
  iconClassName?: string
  label?: string
  labelClassName?: string
  loading?: boolean
  rightSection?: ReactNode
  size?: ButtonSize
  suffixIcon?: string
  suffixIconClassName?: string
  variant?: ButtonVariant
}

const sizeClassName: Record<ButtonSize, string> = {
  xs: 'h-6 px-2 text-12 gap-1',
  sm: 'h-7 px-2.5 text-12 gap-1.5',
  md: 'h-8 px-3 text-14 xl:text-13 gap-2',
  lg: 'h-9 px-3.5 text-14 xl:text-13 gap-2',
  xl: 'h-10 px-4 text-16 xl:text-15 gap-2',
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      color = 'primary',
      disabled,
      icon,
      iconClassName,
      label,
      labelClassName,
      loading,
      rightSection,
      size = 'md',
      suffixIcon,
      suffixIconClassName,
      variant = 'solid',
      ...props
    },
    ref,
  ) => {
    const variantClassName = getVariantClassName(variant, color)
    const mergedClassName = cn(variantClassName, sizeClassName[size], className)

    return (
      <button
        className={mergedClassName}
        data-loading={loading || undefined}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children ?? (
          <>
            {loading && (
              <Icon className='-ml-1 animate-spin' name='fa:spinner' />
            )}
            {!loading && icon && (
              <Icon className={cn('-ml-1', iconClassName)} name={icon} />
            )}
            <span className={labelClassName}>{label}</span>
            {suffixIcon && (
              <Icon
                className={cn('-mr-1', suffixIconClassName)}
                name={suffixIcon}
              />
            )}
            {rightSection && <span className='-mr-1'>{rightSection}</span>}
          </>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'
export { Button }
