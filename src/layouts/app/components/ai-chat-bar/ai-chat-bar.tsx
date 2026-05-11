import { AnimatePresence, motion } from 'motion/react'
import { ANIMATE_NORMAL } from '@/constants'
import { useAiChatStore } from '@/layouts/app/stores/use-ai-chat-store'

export const AiChatBar = () => {
  const isAiChatOpen = useAiChatStore((state) => state.isAiChatOpen)

  return (
    <AnimatePresence>
      {isAiChatOpen && (
        <motion.div
          className='overflow-hidden bg-surface-muted'
          exit={{ opacity: 0, width: 0 }}
          initial={{ opacity: 0, width: 0 }}
          transition={{ duration: ANIMATE_NORMAL }}
          animate={{
            opacity: 1,
            width: '23rem',
          }}
        >
          <div className='h-full w-92 p-4'></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
