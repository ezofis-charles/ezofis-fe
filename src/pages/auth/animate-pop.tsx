import type { HTMLMotionProps } from 'motion/react'
import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { Title } from '@/components/base/title'
import { Logo } from '@/components/common/logo'
import { cn } from '@/utils/cn'

interface Props extends HTMLMotionProps<'div'> {
  children: ReactNode
  title: string
  customDescription?: ReactNode
  description?: string
  disableInitialAnimation?: boolean
}

export const AnimatePop = ({
  children,
  className,
  customDescription,
  description,
  disableInitialAnimation = false,
  title,
  ...rest
}: Props) => {
  return (
    <motion.div
      {...rest}
      animate={{ opacity: 1, scale: 1 }}
      className={cn('w-80 space-y-6 py-12', className)}
      initial={disableInitialAnimation ? false : { opacity: 0, scale: 0.9 }}
    >
      <Logo className='justify-center' hideText />
      <Title
        className='text-center'
        customDescription={customDescription}
        description={description}
        level={1}
        title={title}
      />
      {children}
    </motion.div>
  )
}
