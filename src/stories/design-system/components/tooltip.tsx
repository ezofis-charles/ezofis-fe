import { ButtonIcon } from '@/components/base/button'
import { Tooltip } from '@/components/base/tooltip'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const TooltipStory = () => {
  return (
    <>
      <Header title='Tooltip' />

      <Section title='Default'>
        <Tooltip content='Default' position='right'>
          <ButtonIcon color='gray' icon='tabler:download' variant='outline' />
        </Tooltip>
      </Section>

      <Section title='Colors'>
        <div className='flex flex-col items-start gap-4'>
          <Tooltip color='primary' content='Primary' position='right'>
            <ButtonIcon icon='tabler:download' variant='subtle' />
          </Tooltip>

          <Tooltip color='secondary' content='Secondary' position='right'>
            <ButtonIcon
              color='secondary'
              icon='tabler:download'
              variant='subtle'
            />
          </Tooltip>

          <Tooltip color='red' content='Red' position='right'>
            <ButtonIcon color='red' icon='tabler:download' variant='subtle' />
          </Tooltip>

          <Tooltip content='Gray' position='right'>
            <ButtonIcon color='gray' icon='tabler:download' variant='subtle' />
          </Tooltip>
        </div>
      </Section>
    </>
  )
}
