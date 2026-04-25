import { forwardRef } from 'react'
import type { Option } from '@/types/option'
import type { SelectProps } from './input-types'
import { Combobox } from './combobox'
import { useLocalSearch } from './combobox/hooks/use-local-search'

interface Props extends SelectProps {
  value: null | Option
  size?: 'md' | 'sm'
  onChange: (value: null | Option) => void
}

const InputSelect = forwardRef<HTMLButtonElement, Props>(
  ({ options, value, onChange, ...rest }, ref) => {
    const { filteredOptions, search, onSearch } = useLocalSearch(options)

    const handleChange = (value: Option[]) => {
      onChange(value.length > 0 ? value[0] : null)
    }

    return (
      <Combobox
        {...rest}
        options={filteredOptions}
        ref={ref}
        search={search}
        value={value ? [value] : []}
        variant='single'
        onChange={handleChange}
        onSearch={onSearch}
      />
    )
  },
)

InputSelect.displayName = 'InputSelect'
export { InputSelect }
