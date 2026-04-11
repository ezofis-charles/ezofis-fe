import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'

export const ClearAll = () => {
  return (
    <Tooltip content='Clear all' position='top'>
      <ButtonIcon
        ariaLabel='clear all'
        color='gray'
        icon='tabler:clear-all'
        variant='ghost'
      />
    </Tooltip>
  )
}
