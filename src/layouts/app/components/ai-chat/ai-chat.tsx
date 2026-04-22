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

const aiChatSpacerMotion = {
  initial: false,
  transition: TRANSITION,
  animate: (isAiChatOpen: boolean) => ({
    width: isAiChatOpen ? AI_BAR_WIDTH : 0,
  }),
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

export const AiChat = () => {
  const isAiChatOpen = useAiChatStore((state) => state.isAiChatOpen)

  return (
    <div className='ml-1'>
      <motion.div
        animate={aiChatSpacerMotion.animate(isAiChatOpen)}
        initial={aiChatSpacerMotion.initial}
        transition={aiChatSpacerMotion.transition}
      />
      <AnimatePresence>
        {isAiChatOpen && (
          <motion.div
            {...aiChatContentMotion}
            className='fixed top-1 right-1 bottom-1 w-96 rounded-xl border border-gray-200 bg-surface p-4'
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
