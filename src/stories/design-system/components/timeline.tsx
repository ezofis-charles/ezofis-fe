import { Timeline } from '@/components/base/timeline'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

const items = [
  {
    description: '29-Oct-2025 10:01 AM',
    title: 'Order Placed',
  },
  {
    description: '29-Oct-2025 10:22 AM',
    title: 'Confirmed',
  },
  {
    description: '29-Oct-2025 06:01 PM',
    title: 'Shipped',
  },
  {
    description: '30-Oct-2025 11:10 AM',
    title: 'Out for Delivery',
  },
  {
    description: '30-Oct-2025 04:10 PM',
    title: 'Delivered',
  },
]

export const TimelineStory = () => {
  return (
    <>
      <Header title='Timeline' />

      <Section title='Default'>
        <Timeline>
          {items.map((item) => (
            <Timeline.Item key={item.title} title={item.title} />
          ))}
        </Timeline>
      </Section>

      <Section title='With Children'>
        <Timeline>
          {items.map((item) => (
            <Timeline.Item key={item.title} title={item.title}>
              <div className='text-12 text-gray-11'>{item.description}</div>
            </Timeline.Item>
          ))}
        </Timeline>
      </Section>

      <Section title='Colors'>
        <div className='space-y-12'>
          <Timeline color='gray'>
            {items.map((item) => (
              <Timeline.Item key={item.title} title={item.title} />
            ))}
          </Timeline>

          <Timeline color='secondary'>
            {items.map((item) => (
              <Timeline.Item key={item.title} title={item.title} />
            ))}
          </Timeline>
        </div>
      </Section>
    </>
  )
}
