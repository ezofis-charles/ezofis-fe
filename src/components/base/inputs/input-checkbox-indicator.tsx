import { Checkbox as Base } from '@mantine/core'

interface Props {
  checked?: boolean
  disabled?: boolean
  indeterminate?: boolean
}

export const InputCheckboxIndicator = ({
  checked,
  disabled,
  indeterminate,
}: Props) => {
  return (
    <div className='flex size-5 items-center justify-center'>
      <Base.Indicator
        checked={checked}
        className='group border-gray-8 rounded-[3px] bg-surface-raised data-checked:border-primary data-checked:bg-primary'
        disabled={disabled}
        indeterminate={indeterminate}
        size='xs'
        classNames={{
          icon: 'text-transparent group-data-checked:text-white',
        }}
      />
    </div>
  )
}
