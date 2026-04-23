import { Radio as Base } from '@mantine/core'

interface Props {
  checked?: boolean
  disabled?: boolean
}

export const InputRadioIndicator = ({ checked, disabled }: Props) => {
  return (
    <div className='flex size-5 items-center justify-center'>
      <Base.Indicator
        checked={checked}
        className='group data-checked:border-primary data-checked:bg-primary border-gray-8 bg-surface'
        disabled={disabled}
        size='xs'
        classNames={{
          icon: 'text-transparent group-data-checked:text-white',
        }}
      />
    </div>
  )
}
