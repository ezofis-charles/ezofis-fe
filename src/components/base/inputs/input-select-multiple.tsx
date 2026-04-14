import { forwardRef } from 'react'
import type { Option } from '@/types/option'
import type { SelectProps } from './input-types'
import { Combobox } from './combobox'
import { useLocalSearch } from './combobox/hooks/use-local-search'

interface Props extends SelectProps {
  value: Option[]
  onChange: (value: Option[]) => void
}

const InputSelectMultiple = forwardRef<HTMLButtonElement, Props>(
  ({ options, ...rest }, ref) => {
    const { filteredOptions, search, onSearch } = useLocalSearch(options)

    return (
      <Combobox
        {...rest}
        options={filteredOptions}
        ref={ref}
        search={search}
        variant='multiple'
        onSearch={onSearch}
      />
    )
  },
)

InputSelectMultiple.displayName = 'InputSelectMultiple'
export { InputSelectMultiple }
