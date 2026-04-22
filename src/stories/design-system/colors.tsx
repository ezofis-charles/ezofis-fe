import { cn } from '@/utils/cn'
import { Header } from './shared/header'
import { Section } from './shared/section'

const colors = [
  {
    name: 'Primary',
    shades: [
      'bg-primary-50',
      'bg-primary-100',
      'bg-primary-200',
      'bg-primary-300',
      'bg-primary-400',
      'bg-primary-500',
      'bg-primary-600',
      'bg-primary-700',
      'bg-primary-800',
      'bg-primary-900',
      'bg-primary-950',
    ],
  },
  {
    name: 'Secondary',
    shades: [
      'bg-secondary-50',
      'bg-secondary-100',
      'bg-secondary-200',
      'bg-secondary-300',
      'bg-secondary-400',
      'bg-secondary-500',
      'bg-secondary-600',
      'bg-secondary-700',
      'bg-secondary-800',
      'bg-secondary-900',
      'bg-secondary-950',
    ],
  },
  {
    name: 'Gray',
    shades: [
      'bg-gray-50',
      'bg-gray-100',
      'bg-gray-200',
      'bg-gray-300',
      'bg-gray-400',
      'bg-gray-500',
      'bg-gray',
      'bg-gray-700',
      'bg-gray-800',
      'bg-gray-900',
      'bg-gray-950',
    ],
  },
  {
    name: 'Red',
    shades: [
      'bg-red-50',
      'bg-red-100',
      'bg-red-200',
      'bg-red-300',
      'bg-red-400',
      'bg-red-500',
      'bg-red',
      'bg-red-700',
      'bg-red-800',
      'bg-red-900',
      'bg-red-950',
    ],
  },
  {
    name: 'Green',
    shades: [
      'bg-green-50',
      'bg-green-100',
      'bg-green-200',
      'bg-green-300',
      'bg-green-400',
      'bg-green-500',
      'bg-green',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
      'bg-green-950',
    ],
  },
  {
    name: 'Blue',
    shades: [
      'bg-blue-50',
      'bg-blue-100',
      'bg-blue-200',
      'bg-blue-300',
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',
      'bg-blue-950',
    ],
  },
  {
    name: 'Yellow',
    shades: [
      'bg-yellow-50',
      'bg-yellow-100',
      'bg-yellow-200',
      'bg-yellow-300',
      'bg-yellow-400',
      'bg-yellow-500',
      'bg-yellow-600',
      'bg-yellow-700',
      'bg-yellow-800',
      'bg-yellow-900',
      'bg-yellow-950',
    ],
  },
  {
    name: 'Orange',
    shades: [
      'bg-orange-50',
      'bg-orange-100',
      'bg-orange-200',
      'bg-orange-300',
      'bg-orange-400',
      'bg-orange-500',
      'bg-orange-600',
      'bg-orange-700',
      'bg-orange-800',
      'bg-orange-900',
      'bg-orange-950',
    ],
  },
  {
    name: 'Violet',
    shades: [
      'bg-violet-50',
      'bg-violet-100',
      'bg-violet-200',
      'bg-violet-300',
      'bg-violet-400',
      'bg-violet-500',
      'bg-violet-600',
      'bg-violet-700',
      'bg-violet-800',
      'bg-violet-900',
      'bg-violet-950',
    ],
  },
  {
    name: 'Indigo',
    shades: [
      'bg-indigo-50',
      'bg-indigo-100',
      'bg-indigo-200',
      'bg-indigo-300',
      'bg-indigo-400',
      'bg-indigo-500',
      'bg-indigo-600',
      'bg-indigo-700',
      'bg-indigo-800',
      'bg-indigo-900',
      'bg-indigo-950',
    ],
  },
  {
    name: 'Pink',
    shades: [
      'bg-pink-50',
      'bg-pink-100',
      'bg-pink-200',
      'bg-pink-300',
      'bg-pink-400',
      'bg-pink-500',
      'bg-pink-600',
      'bg-pink-700',
      'bg-pink-800',
      'bg-pink-900',
      'bg-pink-950',
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
                className={cn('size-12 rounded border border-gray-200', shade)}
                key={shade}
              />
            ))}
          </div>
        </Section>
      ))}
    </>
  )
}
