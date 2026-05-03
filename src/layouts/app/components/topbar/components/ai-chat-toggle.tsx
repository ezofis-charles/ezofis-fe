import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'
import { TOOLTIP_DELAY } from '@/constants'
import { useAiChatStore } from '@/layouts/app/stores/use-ai-chat-store'

export const AiChatToggle = () => {
  const isAiChatOpen = useAiChatStore((state) => state.isAiChatOpen)
  const toggleAiChat = useAiChatStore((state) => state.toggleAiChat)

  return (
    <Tooltip
      content={isAiChatOpen ? 'Close AI Chat' : 'Open AI Chat'}
      openDelay={TOOLTIP_DELAY * 2}
      position='bottom-end'
    >
      <ButtonIcon
        ariaLabel='toggle ai chat'
        color='gray'
        icon='boxicons:sparkle'
        variant='ghost'
        onClick={toggleAiChat}
      />
    </Tooltip>
  )
}
