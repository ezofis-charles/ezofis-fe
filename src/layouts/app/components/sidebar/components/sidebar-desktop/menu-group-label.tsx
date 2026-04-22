import { AnimatePresence, motion } from 'motion/react'
import { Divider } from '@/components/base/divider'
import { ANIMATE_NORMAL } from '@/constants'
import { useSidebarStore } from '@/layouts/app/stores/use-sidebar-store'
import { cn } from '@/utils/cn'

interface Props {
  index: number
  label: string
}

const animationConfig = {
  animate: { height: 'auto', opacity: 1 },
  className: 'overflow-hidden',
  exit: { height: 0, opacity: 0 },
  initial: { height: 0, opacity: 0 },
  transition: { duration: ANIMATE_NORMAL },
}

export const MenuGroupLabel = ({ index, label }: Props) => {
  const sidebarState = useSidebarStore((state) => state.sidebarState)

  return (
    <>
      <AnimatePresence initial={false}>
        {sidebarState === 'collapsed' && index !== 0 && (
          <motion.div {...animationConfig}>
            <Divider className='mx-3 my-2' />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {sidebarState === 'expanded' && (
          <motion.div {...animationConfig}>
            <div
              className={cn(
                'text-gray-10 px-4 py-2 text-12 font-medium whitespace-nowrap',
                index !== 0 && 'mt-4',
              )}
            >
              {label}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
