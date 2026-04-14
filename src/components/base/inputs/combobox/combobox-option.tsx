import { Combobox as Base } from '@mantine/core'
import type { Option } from '@/types/option'
import { cn } from '@/utils/cn'
import type { SelectVariant } from '../input-types'
import { InputCheckboxIndicator } from '../input-checkbox-indicator'
import { InputRadioIndicator } from '../input-radio-indicator'

interface Props extends Option {
  icon?: string
  isSelected?: boolean
  variant?: SelectVariant
}

export const ComboboxOption = ({
  description,
  disabled,
  id,
  isSelected,
  name,
  variant = 'single',
}: Props) => {
  return (
    <Base.Option
      active={isSelected}
      disabled={disabled}
      value={id}
      className={cn(
        'group flex min-h-8 gap-2.5 rounded px-1.5 py-1 transition-colors hover:bg-gray-4 data-combobox-selected:bg-gray-4',
        !description && 'items-center',
      )}
    >
      {variant === 'multiple' ? (
        <InputCheckboxIndicator checked={isSelected} />
      ) : (
        <InputRadioIndicator checked={isSelected} />
      )}

      <div>
        <div className='text-micro/5 font-medium text-gray-12'>{name}</div>
        {description && (
          <div className='text-micro/5 text-gray-10'>{description}</div>
        )}
      </div>
    </Base.Option>
  )
}
