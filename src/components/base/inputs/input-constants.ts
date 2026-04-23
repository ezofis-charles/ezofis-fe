import type { InputWrapperOrder } from './input-types'

export const classNames = {
  description: 'mt-2 text-14 xl:text-13 text-gray-10',
  error: 'mt-2 text-14 xl:text-13 text-red',
  input:
    'border-gray-5 bg-surface text-14 xl:text-13 font-medium text-gray-12 placeholder:font-normal placeholder:text-gray-8 focus-within:border-primary-8 focus-within:ring-2 focus-within:ring-primary-6 disabled:bg-gray-3 data-disabled:bg-gray-3 data-error:border-red-8 data-error:ring-red-5 h-9 min-h-9 group-data-[size=sm]:h-8 group-data-[size=sm]:min-h-8',
  label: 'mb-2 text-14 xl:text-13 font-medium text-gray',
  required: 'text-red',
  wrapper: 'm-0 group',
} as const

export const inputWrapperOrder: InputWrapperOrder[] = [
  'label',
  'input',
  'description',
  'error',
] as const

export const OptionsPerLineClass = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
} as const
