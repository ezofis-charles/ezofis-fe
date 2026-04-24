import { Icon } from '@/components/base/icon'

interface Props {
  reveal: boolean
}

export const VisibilityToggleIcon = ({ reveal }: Props) => {
  return (
    <Icon
      className='text-gray-11 group-hover:text-gray-12'
      name={reveal ? 'tabler:eye-off' : 'tabler:eye'}
    />
  )
}
