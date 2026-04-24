import type { ReactNode } from 'react'
import { FloatingPanel as Base } from '@ark-ui/react/floating-panel'
import { useState } from 'react'
import { ButtonIcon } from '@/components/base/button'
import { Icon } from '@/components/base/icon'

interface Props {
  children: ReactNode
  title: string
  trigger: ReactNode
  initialSize?: {
    height: number
    width: number
  }
}

export const FloatingPanel = ({
  children,
  initialSize,
  title,
  trigger,
}: Props) => {
  const [size, setSize] = useState(initialSize || { height: 280, width: 280 })

  return (
    <Base.Root
      size={size}
      getAnchorPosition={({ triggerRect }) => {
        if (!triggerRect) return { x: 0, y: 0 }
        return {
          x: triggerRect.x,
          y: triggerRect.y + triggerRect.height + 8,
        }
      }}
      onSizeChange={(e) => setSize(e.size)}
    >
      <Base.Trigger asChild>{trigger}</Base.Trigger>
      <Base.Positioner>
        <Base.Content className='rounded-lg border border-gray-4 bg-surface p-0 shadow-xl data-maximized:rounded-none data-maximized:border-0'>
          <Base.DragTrigger>
            <Base.Header className='flex h-13 flex-wrap items-center gap-1 pr-2 pl-4'>
              <Icon
                className='text-gray-11'
                name='material-symbols:drag-indicator'
              />
              <Base.Title className='ml-1 flex-1 text-14 font-semibold text-gray-13 xl:text-13'>
                {title}
              </Base.Title>
              <Base.Control>
                <Base.StageTrigger stage='maximized'>
                  <ButtonIcon
                    color='gray'
                    icon='tabler:maximize'
                    variant='ghost'
                  />
                </Base.StageTrigger>
                <Base.StageTrigger stage='default'>
                  <ButtonIcon
                    color='gray'
                    icon='tabler:minimize'
                    variant='ghost'
                  />
                </Base.StageTrigger>
                <Base.CloseTrigger>
                  <ButtonIcon color='gray' icon='tabler:x' variant='ghost' />
                </Base.CloseTrigger>
              </Base.Control>
            </Base.Header>
          </Base.DragTrigger>
          <Base.Body>{children}</Base.Body>
          <Base.ResizeTrigger axis='n' className='h-1.5 max-w-[90%]' />
          <Base.ResizeTrigger axis='s' className='h-1.5 max-w-[90%]' />
          <Base.ResizeTrigger axis='e' className='max-h-[90%] w-1.5' />
          <Base.ResizeTrigger axis='w' className='max-h-[90%] w-1.5' />
          <Base.ResizeTrigger axis='ne' className='size-2.5' />
          <Base.ResizeTrigger axis='se' className='size-2.5' />
          <Base.ResizeTrigger axis='sw' className='size-2.5' />
          <Base.ResizeTrigger axis='nw' className='size-2.5' />
        </Base.Content>
      </Base.Positioner>
    </Base.Root>
  )
}
