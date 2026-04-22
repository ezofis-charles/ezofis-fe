import { tv } from 'tailwind-variants'

export const triggerClassName = tv({
  base: '**:data-[part=trigger]:p-2',
  compoundVariants: [
    {
      class:
        '**:data-selected:text-gray-900 hover:**:data-selected:text-gray-900',
      color: 'gray',
      variant: 'subtle',
    },
    {
      class:
        '**:data-selected:text-primary-12 hover:**:data-selected:text-primary-12',
      color: 'primary',
      variant: 'subtle',
    },
    {
      class:
        '**:data-selected:text-secondary-12 hover:**:data-selected:text-secondary-12',
      color: 'secondary',
      variant: 'subtle',
    },
  ],
  variants: {
    color: {
      gray: '',
      primary: '',
      secondary: '',
    },
    variant: {
      outline:
        '**:data-selected:text-gray-900 hover:**:data-selected:text-gray-900',
      solid: '**:data-selected:text-white hover:**:data-selected:text-white',
      subtle: '',
    },
  },
})

export const indicatorClassName = tv({
  base: 'w-(--width) rounded',
  compoundVariants: [
    {
      class: 'bg-gray-9',
      color: 'gray',
      variant: 'solid',
    },
    {
      class: 'bg-primary',
      color: 'primary',
      variant: 'solid',
    },
    {
      class: 'bg-secondary-9',
      color: 'secondary',
      variant: 'solid',
    },
    {
      class: 'bg-gray-11',
      color: 'gray',
      variant: 'outline',
    },
    {
      class: 'bg-primary',
      color: 'primary',
      variant: 'outline',
    },
    {
      class: 'bg-secondary',
      color: 'secondary',
      variant: 'outline',
    },
    {
      class: 'bg-gray-200',
      color: 'gray',
      variant: 'subtle',
    },
    {
      class: 'bg-primary-3',
      color: 'primary',
      variant: 'subtle',
    },
    {
      class: 'bg-secondary-3',
      color: 'secondary',
      variant: 'subtle',
    },
  ],
  variants: {
    color: {
      gray: '',
      primary: '',
      secondary: '',
    },
    variant: {
      outline: 'bottom-0 h-0.5',
      solid: '-z-1 h-(--height) shadow-sm',
      subtle: '-z-1 h-(--height)',
    },
  },
})
