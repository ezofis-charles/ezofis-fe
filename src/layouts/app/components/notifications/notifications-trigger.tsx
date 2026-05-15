import { ButtonIcon } from '@/components/base/button'
import { Indicator } from '@/components/base/indicator'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'

export const NotificationsTrigger = () => {
  return (
    <Tooltip content='Notifications' openDelay={TOOLTIP_DELAY} position='right'>
      <Indicator offset={8} animate>
        <ButtonIcon
          ariaLabel='notifications'
          color='gray'
          icon='tabler:bell'
          variant='ghost'
        />
      </Indicator>
    </Tooltip>
  )
}
