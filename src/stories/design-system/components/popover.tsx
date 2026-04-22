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
            <h1 className='mb-2 text-base font-semibold text-gray-900'>
              Get Started
            </h1>
            <p className='text-gray border-gray-4 border-b pb-4 text-14 text-balance xl:text-13/6'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur possimus cupiditate molestias dolore, quasi ipsam
              rerum.
            </p>
            <div className='flex items-center gap-2 pt-3'>
              <div className='text-gray-10 flex-1 text-12'>6 of 8</div>
              <Button color='gray' label='Skip' variant='outline' />
              <Button label='Next' />
            </div>
          </div>
        </Popover>
      </Section>
    </>
  )
}
