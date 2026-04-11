import type { UseTourReturn } from '@ark-ui/react/tour'
import { Portal } from '@ark-ui/react/portal'
import { Tour as Base } from '@ark-ui/react/tour'
import { Button } from '@/components/base/button'

export type Step = Base.StepDetails

interface Props {
  tour: UseTourReturn
}

export const Tour = ({ tour }: Props) => {
  return (
    <Base.Root tour={tour}>
      <Portal>
        <Base.Backdrop className='z-(--z-index) bg-black/40' />
        <Base.Spotlight className='rounded!' />
        <Base.Positioner className='fixed z-(--z-index) data-[type=dialog]:inset-0 data-[type=dialog]:flex data-[type=dialog]:transform-none! data-[type=dialog]:items-center data-[type=dialog]:justify-center'>
          <Base.Content className='rounded-lg border border-gray-4 bg-surface-raised p-4 shadow-xl'>
            <Base.Title className='text-base font-semibold text-gray-13' />
            <Base.Description className='py-3 text-micro/6 text-gray-11' />

            <div className='mt-1 flex flex-wrap items-center justify-between gap-2 border-t border-gray-3 pt-4'>
              <Base.ProgressText className='text-micro/6 text-gray-11' />
              <Base.Control className='flex items-center gap-2'>
                <Base.Actions>
                  {(actions) =>
                    actions.map((action) => (
                      <Base.ActionTrigger
                        action={action}
                        key={action.label}
                        asChild
                      >
                        <Button
                          label={action.label}
                          size='md'
                          color={
                            action.action === 'next' ||
                            action.action === 'dismiss'
                              ? 'primary'
                              : 'gray'
                          }
                          variant={
                            action.action === 'next' ||
                            action.action === 'dismiss'
                              ? 'solid'
                              : 'outline'
                          }
                        />
                      </Base.ActionTrigger>
                    ))
                  }
                </Base.Actions>
              </Base.Control>
            </div>
          </Base.Content>
        </Base.Positioner>
      </Portal>
    </Base.Root>
  )
}
