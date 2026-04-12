import type { HTMLMotionProps } from 'motion/react'
import { motion } from 'motion/react'

export const AnimateSlideLeft = ({ ...rest }: HTMLMotionProps<'div'>) => {
  return (
    <motion.div
      {...rest}
      transition={{ bounce: 0 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      initial={{
        opacity: 0,
        x: 100,
      }}
    />
  )
}
