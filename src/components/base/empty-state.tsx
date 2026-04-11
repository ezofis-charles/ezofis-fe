import { Button } from '@/components/base/button'
import { IconIllustrated } from '@/components/base/icon'
import { Title } from '@/components/base/title'
import { cn } from '@/utils/cn'

interface Props {
  description: string
  icon: string
  title: string
  className?: string
  primaryActionLabel?: string
  secondaryActionLabel?: string
  onPrimaryAction?: () => void
  onSecondaryAction?: () => void
}

export const EmptyState = ({
  className,
  description,
  icon,
  primaryActionLabel,
  secondaryActionLabel,
  title,
  onPrimaryAction,
  onSecondaryAction,
}: Props) => {
  return (
    <div className={cn('max-w-xl', className)}>
      <IconIllustrated icon={icon} />

      <Title
        className='mt-6 text-center'
        description={description}
        level={2}
        title={title}
      />

      {(primaryActionLabel || secondaryActionLabel) && (
        <div className='mt-6 flex justify-center gap-2'>
          {secondaryActionLabel && (
            <Button
              color='gray'
              label={secondaryActionLabel}
              variant='outline'
              onClick={onSecondaryAction}
            />
          )}

          {primaryActionLabel && (
            <Button label={primaryActionLabel} onClick={onPrimaryAction} />
          )}
        </div>
      )}
    </div>
  )
}
