import { Button } from '@/components/base/button'
import { Popover } from '@/components/base/popover'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const PopoverStory = () => {
  return (
    <>
      <Header title='Popover' />

      <Section title='Default'>
        <Popover
          position='bottom-start'
          target={<Button color='gray' label='Open' variant='outline' />}
          width={360}
        >
          <div className='p-4'>
            <h1 className='mb-2 text-16 font-semibold text-gray-13 xl:text-15'>
              Get Started
            </h1>
            <p className='border-b border-gray-4 pb-4 leading-6 text-pretty text-gray-11'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur possimus cupiditate molestias dolore, quasi ipsam
              rerum.
            </p>
            <div className='flex items-center gap-2 pt-3'>
              <div className='flex-1 text-gray-10'>6 of 8</div>
              <Button color='gray' label='Skip' size='sm' variant='outline' />
              <Button label='Next' size='sm' />
            </div>
          </div>
        </Popover>
      </Section>
    </>
  )
}
