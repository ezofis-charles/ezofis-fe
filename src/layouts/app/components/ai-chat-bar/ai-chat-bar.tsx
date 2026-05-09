import { AnimatePresence, motion } from 'motion/react'
import { useAiChatStore } from '@/layouts/app/stores/use-ai-chat-store'

const AI_BAR_WIDTH = 384

const TRANSITION = {
  damping: 30,
  mass: 0.8,
  stiffness: 300,
  type: 'spring' as const,
}

const OPACITY_TRANSITION = {
  duration: 0.2,
}

const aiChatContentMotion = {
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: AI_BAR_WIDTH },
  initial: { opacity: 0, x: AI_BAR_WIDTH },
  transition: {
    opacity: OPACITY_TRANSITION,
    x: TRANSITION,
  },
}

export const AiChatBar = () => {
  const isAiChatOpen = useAiChatStore((state) => state.isAiChatOpen)

  return (
    <AnimatePresence>
      {isAiChatOpen && (
        <motion.div
          {...aiChatContentMotion}
          className='fixed top-0 right-0 bottom-0 w-96 bg-surface-muted p-4'
        ></motion.div>
      )}
    </AnimatePresence>
  )
}
