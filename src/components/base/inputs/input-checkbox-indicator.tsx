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
        className='group data-checked:border-primary data-checked:bg-primary rounded-[3px] border-gray-8 bg-surface'
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
