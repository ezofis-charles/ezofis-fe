import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'

export const GlobalSearch = () => {
  return (
    <Tooltip content='Search' openDelay={TOOLTIP_DELAY}>
      <ButtonIcon
        ariaLabel='search'
        color='gray'
        icon='tabler:search'
        variant='ghost'
      />
    </Tooltip>
  )
}
