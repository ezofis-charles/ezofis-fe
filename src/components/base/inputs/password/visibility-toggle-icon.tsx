import { Icon } from '@/components/base/icon'

interface Props {
  reveal: boolean
}

export const VisibilityToggleIcon = ({ reveal }: Props) => {
  return (
    <Icon
      className='group-hover:text-gray-12 text-gray'
      name={reveal ? 'tabler:eye-off' : 'tabler:eye'}
    />
  )
}
