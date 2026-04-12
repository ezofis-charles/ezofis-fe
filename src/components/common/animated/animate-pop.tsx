import type { HTMLMotionProps } from 'motion/react'
import { motion } from 'motion/react'

export const AnimatePop = ({ ...rest }: HTMLMotionProps<'div'>) => {
  return (
    <motion.div
      {...rest}
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.9 }}
    />
  )
}
