import { Accordion } from '@/components/base/accordion'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

const items = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    label: 'Item 1',
    value: 'item-1',
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    label: 'Item 2',
    value: 'item-2',
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    label: 'Item 3',
    value: 'item-3',
  },
]

export const AccordionStory = () => {
  return (
    <>
      <Header title='Accordion' />

      <Section title='Default'>
        <Accordion className='max-w-80'>
          {items.map((item) => (
            <Accordion.Item
              key={item.value}
              label={item.label}
              value={item.value}
            >
              {item.content}
            </Accordion.Item>
          ))}
        </Accordion>
      </Section>

      <Section title='Outlined'>
        <Accordion className='max-w-80' variant='contained'>
          {items.map((item) => (
            <Accordion.Item
              key={item.value}
              label={item.label}
              value={item.value}
            >
              {item.content}
            </Accordion.Item>
          ))}
        </Accordion>
      </Section>

      <Section title='Separated'>
        <Accordion className='max-w-80' variant='separated'>
          {items.map((item) => (
            <Accordion.Item
              key={item.value}
              label={item.label}
              value={item.value}
            >
              {item.content}
            </Accordion.Item>
          ))}
        </Accordion>
      </Section>

      <Section title='Multiple'>
        <Accordion className='max-w-80' multiple>
          {items.map((item) => (
            <Accordion.Item
              key={item.value}
              label={item.label}
              value={item.value}
            >
              {item.content}
            </Accordion.Item>
          ))}
        </Accordion>
      </Section>

      <Section title='Default Open'>
        <Accordion className='max-w-80' defaultOpen={['item-2']}>
          {items.map((item) => (
            <Accordion.Item
              key={item.value}
              label={item.label}
              value={item.value}
            >
              {item.content}
            </Accordion.Item>
          ))}
        </Accordion>
      </Section>

      <Section title='Disabled'>
        <Accordion className='max-w-80'>
          {items.map((item) => (
            <Accordion.Item
              disabled={item.value === 'item-2'}
              key={item.value}
              label={item.label}
              value={item.value}
            >
              {item.content}
            </Accordion.Item>
          ))}
        </Accordion>
      </Section>
    </>
  )
}
