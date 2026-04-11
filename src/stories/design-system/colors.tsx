import { cn } from '@/utils/cn'
import { Header } from './shared/header'
import { Section } from './shared/section'

const colors = [
  {
    name: 'Primary',
    shades: [
      'bg-primary-1',
      'bg-primary-2',
      'bg-primary-3',
      'bg-primary-4',
      'bg-primary-5',
      'bg-primary-6',
      'bg-primary-7',
      'bg-primary-8',
      'bg-primary-9',
      'bg-primary-10',
      'bg-primary-11',
      'bg-primary-12',
    ],
  },
  {
    name: 'Secondary',
    shades: [
      'bg-secondary-1',
      'bg-secondary-2',
      'bg-secondary-3',
      'bg-secondary-4',
      'bg-secondary-5',
      'bg-secondary-6',
      'bg-secondary-7',
      'bg-secondary-8',
      'bg-secondary-9',
      'bg-secondary-10',
      'bg-secondary-11',
      'bg-secondary-12',
    ],
  },
  {
    name: 'Gray',
    shades: [
      'bg-gray-1',
      'bg-gray-2',
      'bg-gray-3',
      'bg-gray-4',
      'bg-gray-5',
      'bg-gray-6',
      'bg-gray-7',
      'bg-gray-8',
      'bg-gray-9',
      'bg-gray-10',
      'bg-gray-11',
      'bg-gray-12',
    ],
  },
  {
    name: 'Red',
    shades: [
      'bg-red-1',
      'bg-red-2',
      'bg-red-3',
      'bg-red-4',
      'bg-red-5',
      'bg-red-6',
      'bg-red-7',
      'bg-red-8',
      'bg-red-9',
      'bg-red-10',
      'bg-red-11',
      'bg-red-12',
    ],
  },
  {
    name: 'Green',
    shades: [
      'bg-green-1',
      'bg-green-2',
      'bg-green-3',
      'bg-green-4',
      'bg-green-5',
      'bg-green-6',
      'bg-green-7',
      'bg-green-8',
      'bg-green-9',
      'bg-green-10',
      'bg-green-11',
      'bg-green-12',
    ],
  },
  {
    name: 'Blue',
    shades: [
      'bg-blue-1',
      'bg-blue-2',
      'bg-blue-3',
      'bg-blue-4',
      'bg-blue-5',
      'bg-blue-6',
      'bg-blue-7',
      'bg-blue-8',
      'bg-blue-9',
      'bg-blue-10',
      'bg-blue-11',
      'bg-blue-12',
    ],
  },
  {
    name: 'Yellow',
    shades: [
      'bg-yellow-1',
      'bg-yellow-2',
      'bg-yellow-3',
      'bg-yellow-4',
      'bg-yellow-5',
      'bg-yellow-6',
      'bg-yellow-7',
      'bg-yellow-8',
      'bg-yellow-9',
      'bg-yellow-10',
      'bg-yellow-11',
      'bg-yellow-12',
    ],
  },
  {
    name: 'Orange',
    shades: [
      'bg-orange-1',
      'bg-orange-2',
      'bg-orange-3',
      'bg-orange-4',
      'bg-orange-5',
      'bg-orange-6',
      'bg-orange-7',
      'bg-orange-8',
      'bg-orange-9',
      'bg-orange-10',
      'bg-orange-11',
      'bg-orange-12',
    ],
  },
  {
    name: 'Violet',
    shades: [
      'bg-violet-1',
      'bg-violet-2',
      'bg-violet-3',
      'bg-violet-4',
      'bg-violet-5',
      'bg-violet-6',
      'bg-violet-7',
      'bg-violet-8',
      'bg-violet-9',
      'bg-violet-10',
      'bg-violet-11',
      'bg-violet-12',
    ],
  },
  {
    name: 'Indigo',
    shades: [
      'bg-indigo-1',
      'bg-indigo-2',
      'bg-indigo-3',
      'bg-indigo-4',
      'bg-indigo-5',
      'bg-indigo-6',
      'bg-indigo-7',
      'bg-indigo-8',
      'bg-indigo-9',
      'bg-indigo-10',
      'bg-indigo-11',
      'bg-indigo-12',
    ],
  },
  {
    name: 'Pink',
    shades: [
      'bg-pink-1',
      'bg-pink-2',
      'bg-pink-3',
      'bg-pink-4',
      'bg-pink-5',
      'bg-pink-6',
      'bg-pink-7',
      'bg-pink-8',
      'bg-pink-9',
      'bg-pink-10',
      'bg-pink-11',
      'bg-pink-12',
    ],
  },
  {
    name: 'Bronze',
    shades: [
      'bg-bronze-1',
      'bg-bronze-2',
      'bg-bronze-3',
      'bg-bronze-4',
      'bg-bronze-5',
      'bg-bronze-6',
      'bg-bronze-7',
      'bg-bronze-8',
      'bg-bronze-9',
      'bg-bronze-10',
      'bg-bronze-11',
      'bg-bronze-12',
    ],
  },
  {
    name: 'Gold',
    shades: [
      'bg-gold-1',
      'bg-gold-2',
      'bg-gold-3',
      'bg-gold-4',
      'bg-gold-5',
      'bg-gold-6',
      'bg-gold-7',
      'bg-gold-8',
      'bg-gold-9',
      'bg-gold-10',
      'bg-gold-11',
      'bg-gold-12',
    ],
  },
]

export const ColorsStory = () => {
  return (
    <>
      <Header title='Colors' />

      {colors.map((color) => (
        <Section key={color.name} title={color.name}>
          <div className='flex flex-wrap items-center gap-2'>
            {color.shades.map((shade) => (
              <div
                className={cn('size-12 rounded border border-gray-3', shade)}
                key={shade}
              />
            ))}
          </div>
        </Section>
      ))}
    </>
  )
}
