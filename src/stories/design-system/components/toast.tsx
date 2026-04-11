import { Button } from '@/components/base/button'
import { showToast } from '@/components/base/toast/show-toast'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const ToastStory = () => {
  return (
    <>
      <Header title='Toast' />

      <Section title='Default'>
        <Button
          color='gray'
          label='Default'
          variant='outline'
          onClick={() =>
            showToast({
              description: 'Monday, March 3rd at 6.30 PM',
              title: 'Event created successfully',
            })
          }
        />
      </Section>

      <Section title='Variants'>
        <div className='flex items-center gap-2'>
          <Button
            color='gray'
            label='Success'
            variant='outline'
            onClick={() =>
              showToast({
                description: 'Monday, March 3rd at 6.30 PM',
                title: 'Event created successfully',
                variant: 'success',
              })
            }
          />
          <Button
            color='gray'
            label='Warning'
            variant='outline'
            onClick={() =>
              showToast({
                description: 'Monday, March 3rd at 6.30 PM',
                title: 'Event already exists',
                variant: 'warning',
              })
            }
          />
          <Button
            color='gray'
            label='Error'
            variant='outline'
            onClick={() =>
              showToast({
                description: 'Monday, March 3rd at 6.30 PM',
                title: 'Error creating event',
                variant: 'error',
              })
            }
          />
        </div>
      </Section>

      <Section title='Loading'>
        <Button
          color='gray'
          label='Loading'
          variant='outline'
          onClick={() => {
            showToast({
              description: 'Monday, March 3rd at 6.30 PM',
              title: 'Creating new event',
              variant: 'loading',
            })
          }}
        />
      </Section>
    </>
  )
}
