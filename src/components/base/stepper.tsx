import { Stepper as Base } from '@mantine/core'
import { motion } from 'motion/react'
import { Icon } from '@/components/base/icon'
import { cn } from '@/utils/cn'

const MotionStep = motion.create(Base.Step)

export interface Step {
  id: number
  label: string
  clickable?: boolean
  description?: string
  disabled?: boolean
  icon?: string
  loading?: boolean
}

interface Props {
  active: number
  steps: Step[]
  orientation?: 'horizontal' | 'vertical'
  setActive: (step: number) => void
}

export const Stepper = ({
  active,
  orientation = 'horizontal',
  steps,
  setActive,
}: Props) => {
  return (
    <Base
      active={active}
      orientation={orientation}
      size='xs'
      classNames={{
        separator: 'rounded-full bg-gray-200',
        step: 'disabled:opacity-50!',
        stepBody: 'ml-4',
        stepCompletedIcon: 'text-primary [&>svg]:!size-3.5',
        stepDescription: 'text-gray-10 m-0 text-12/5',
        stepIcon:
          'data-[completed]:bg-primary-4 size-8 min-h-8 min-w-8 border-0 bg-gray-200 text-14 font-semibold text-gray data-[progress]:bg-primary data-[progress]:text-white xl:text-13/5',
        stepLabel: cn(
          'text-gray-12 text-14 font-medium xl:text-13',
          orientation === 'vertical' && 'flex min-h-8.5 items-center',
        ),
        stepLoader: 'after:border-gray-11 mt-1 after:border-t-transparent',
        verticalSeparator: 'rounded-full border-gray-200 bg-gray-200',
      }}
      onStepClick={setActive}
    >
      {steps.map((step, index) => (
        <MotionStep
          allowStepSelect={step.clickable}
          animate={{ opacity: 1, scale: 1 }}
          description={step.description}
          disabled={step.disabled}
          icon={step.icon ? <Icon name={step.icon} /> : undefined}
          initial={{ opacity: 0, scale: 0.5 }}
          key={step.id}
          label={step.label}
          loading={step.loading}
          transition={{ delay: index * 0.1, duration: 0.25 }}
        />
      ))}
    </Base>
  )
}
