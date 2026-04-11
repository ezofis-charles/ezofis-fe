import type { ReactNode } from 'react'
import { Menu as Base } from '@mantine/core'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'

interface Props {
  label: string
  className?: string
  disabled?: boolean
  icon?: string
  iconClassName?: string
  leftSection?: ReactNode
  rightSection?: ReactNode
  suffixIcon?: string
  suffixIconClassName?: string
  onClick?: () => void
}

export const MenuItem = ({
  className,
  disabled,
  icon,
  iconClassName,
  label,
  leftSection,
  rightSection,
  suffixIcon,
  suffixIconClassName,
  onClick,
}: Props) => {
  return (
    <Base.Item
      className={className}
      disabled={disabled}
      leftSection={
        leftSection ??
        (icon && (
          <Icon
            className={cn('transition-colors', iconClassName)}
            name={icon}
          />
        ))
      }
      rightSection={
        rightSection ??
        (suffixIcon && (
          <Icon
            className={cn('transition-colors', suffixIconClassName)}
            name={suffixIcon}
          />
        ))
      }
      onClick={onClick}
    >
      {label}
    </Base.Item>
  )
}
