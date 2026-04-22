import { tv } from 'tailwind-variants'
import type { ButtonColor, ButtonVariant } from './button-types'

export function getVariantClassName(
  variant: ButtonVariant,
  color: ButtonColor,
) {
  const className = tv({
    base: 'outline-primary-8 flex shrink-0 cursor-pointer appearance-none items-center rounded border border-transparent font-medium transition-colors select-none focus-visible:outline-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 data-loading:pointer-events-none data-loading:opacity-75',
    compoundVariants: [
      {
        class: 'bg-gray-9 hover:bg-gray-10',
        color: 'gray',
        variant: 'solid',
      },
      {
        class: 'hover:bg-primary-10 bg-primary',
        color: 'primary',
        variant: 'solid',
      },
      {
        class: 'bg-secondary-9 hover:bg-secondary-10',
        color: 'secondary',
        variant: 'solid',
      },
      {
        class: 'bg-red-9 hover:bg-red-10',
        color: 'red',
        variant: 'solid',
      },
      {
        class: 'bg-green-9 hover:bg-green-10',
        color: 'green',
        variant: 'solid',
      },

      {
        class:
          'border-gray-5 hover:bg-gray-4 hover:text-gray-12 bg-surface-raised text-gray',
        color: 'gray',
        variant: 'outline',
      },
      {
        class: 'border-primary-5 hover:bg-primary-4 text-primary',
        color: 'primary',
        variant: 'outline',
      },
      {
        class: 'border-secondary-5 hover:bg-secondary-4 text-secondary',
        color: 'secondary',
        variant: 'outline',
      },
      {
        class: 'border-red-5 hover:bg-red-4 text-red',
        color: 'red',
        variant: 'outline',
      },
      {
        class: 'border-green-5 hover:bg-green-4 text-green',
        color: 'green',
        variant: 'outline',
      },

      {
        class: 'bg-gray-4 hover:bg-gray-5 hover:text-gray-12 text-gray',
        color: 'gray',
        variant: 'subtle',
      },
      {
        class: 'bg-primary-4 hover:bg-primary-5 text-primary',
        color: 'primary',
        variant: 'subtle',
      },
      {
        class: 'bg-secondary-4 hover:bg-secondary-5 text-secondary',
        color: 'secondary',
        variant: 'subtle',
      },
      {
        class: 'bg-red-4 hover:bg-red-5 text-red',
        color: 'red',
        variant: 'subtle',
      },
      {
        class: 'bg-green-4 hover:bg-green-5 text-green',
        color: 'green',
        variant: 'subtle',
      },

      {
        class: 'hover:bg-gray-4 hover:text-gray-12 text-gray',
        color: 'gray',
        variant: 'ghost',
      },
      {
        class: 'hover:bg-primary-4 text-primary',
        color: 'primary',
        variant: 'ghost',
      },
      {
        class: 'hover:bg-secondary-4 text-secondary',
        color: 'secondary',
        variant: 'ghost',
      },
      {
        class: 'hover:bg-red-4 text-red',
        color: 'red',
        variant: 'ghost',
      },
      {
        class: 'hover:bg-green-4 text-green',
        color: 'green',
        variant: 'ghost',
      },
    ],
    variants: {
      color: {
        gray: '',
        green: '',
        primary: '',
        red: '',
        secondary: '',
      },
      variant: {
        ghost: '',
        outline: '',
        solid: 'text-white shadow-sm',
        subtle: '',
      },
    },
  })

  return className({ color, variant })
}
