import type { ReactNode } from 'react'
import { Menu as Base } from '@mantine/core'
import { Icon } from '@/components/base/icon'

interface Props {
  children: ReactNode
  label: string
  disabled?: boolean
  icon?: string
  iconClassName?: string
  width?: number
}

export const MenuSub = ({
  children,
  disabled,
  icon,
  iconClassName,
  label,
  width,
}: Props) => {
  return (
    <Base.Sub transitionProps={{ transition: 'pop' }} width={width}>
      <Base.Sub.Target>
        <Base.Sub.Item
          disabled={disabled}
          leftSection={icon && <Icon className={iconClassName} name={icon} />}
          rightSection={
            <Icon className='text-gray-10' name='tabler:chevron-right' />
          }
        >
          {label}
        </Base.Sub.Item>
      </Base.Sub.Target>
      <Base.Sub.Dropdown>{children}</Base.Sub.Dropdown>
    </Base.Sub>
  )
}
