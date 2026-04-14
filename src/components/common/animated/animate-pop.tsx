import type { HTMLMotionProps } from 'motion/react'
import { motion } from 'motion/react'

interface Props extends HTMLMotionProps<'div'> {
  disableInitialAnimation?: boolean
}

export const AnimatePop = ({
  disableInitialAnimation = false,
  ...rest
}: Props) => {
  return (
    <motion.div
      {...rest}
      animate={{ opacity: 1, scale: 1 }}
      initial={disableInitialAnimation ? false : { opacity: 0, scale: 0.9 }}
    />
  )
}
