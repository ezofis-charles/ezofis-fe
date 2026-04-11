import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'

export const Search = () => {
  return (
    <Tooltip content='Search' position='top'>
      <ButtonIcon
        ariaLabel='search'
        color='gray'
        icon='tabler:search'
        variant='ghost'
      />
    </Tooltip>
  )
}
