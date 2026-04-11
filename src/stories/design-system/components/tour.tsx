import { useTour } from '@ark-ui/react/tour'
import type { Step } from '@/components/base/tour'
import { Button } from '@/components/base/button'
import { Tour } from '@/components/base/tour'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

const steps: Step[] = [
  {
    actions: [{ action: 'next', label: 'Next' }],
    description:
      "Let's take a quick tour to get you started with the main features.",
    id: 'welcome',
    title: 'Welcome to the App!',
    type: 'dialog',
  },
  {
    actions: [
      { action: 'prev', label: 'Back' },
      { action: 'next', label: 'Next' },
    ],
    description: 'Click here to upload your files to the cloud.',
    id: 'upload',
    title: 'Upload Files',
    type: 'tooltip',
    target: () => document.querySelector<HTMLElement>('#step-1'),
  },
  {
    actions: [
      { action: 'prev', label: 'Back' },
      { action: 'next', label: 'Next' },
    ],
    description: 'Save your work to keep your progress.',
    id: 'save',
    title: 'Save Changes',
    type: 'tooltip',
    target: () => document.querySelector<HTMLElement>('#step-2'),
  },
  {
    actions: [
      { action: 'prev', label: 'Back' },
      { action: 'next', label: 'Next' },
    ],
    description: 'Access additional settings and actions from this menu.',
    id: 'more',
    title: 'More Options',
    type: 'tooltip',
    target: () => document.querySelector<HTMLElement>('#step-3'),
  },
  {
    actions: [{ action: 'dismiss', label: 'Finish' }],
    description: 'You now know the basics. Enjoy using the app!',
    id: 'complete',
    title: "You're all set!",
    type: 'dialog',
  },
]

export const TourStory = () => {
  const tour = useTour({ steps })

  return (
    <>
      <Header title='Tour' />

      <Section title='Default'>
        <Button
          color='gray'
          label='Start Tour'
          variant='outline'
          onClick={() => tour.start()}
        />
        <div className='mt-4 flex flex-wrap items-center gap-2'>
          <Button color='gray' id='step-1' label='Step 1' variant='outline' />
          <Button color='gray' id='step-2' label='Step 2' variant='outline' />
          <Button color='gray' id='step-3' label='Step 3' variant='outline' />
        </div>
        <Tour tour={tour} />
      </Section>
    </>
  )
}
