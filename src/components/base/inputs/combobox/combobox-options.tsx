import type { ComboboxStore } from '@mantine/core'
import { Combobox as Base } from '@mantine/core'
import { useRef } from 'react'
import type { Option } from '@/types/option'
import { ScrollArea } from '@/components/base/scroll-area'
import { cn } from '@/utils/cn'
import type { SelectVariant } from '../input.types'
import { ComboboxOption } from './combobox-option'

interface Props {
  comboboxStore: ComboboxStore
  options: Option[]
  search: string
  value: Option[]
  creatable?: boolean
  variant?: SelectVariant
  onBottomReached?: () => void
  onChange: (value: Option[]) => void
}

export const ComboboxOptions = ({
  comboboxStore,
  creatable,
  options,
  search,
  value,
  variant,
  onChange,
}: Props) => {
  const counter = useRef(-1)
  const hasOptions = options.length > 0

  const isSelected = (id: string) => value.some((item) => item.id === id)

  const handleClick = (option: Option) => {
    if (option.disabled) return

    const exists = value.some((v) => v.id === option.id)

    if (variant === 'single') {
      onChange(exists ? [] : [option])
      comboboxStore.closeDropdown()
    }

    if (variant === 'multiple') {
      onChange(
        exists ? value.filter((v) => v.id !== option.id) : [...value, option],
      )
    }
  }

  const handleCreate = () => {
    if (search) {
      const id = counter.current--
      handleClick({
        description: '',
        disabled: false,
        id: String(id),
        name: search,
      })
    }
  }

  return (
    <Base.Options className='p-1'>
      <ScrollArea className='h-54'>
        {!hasOptions && !creatable && (
          <div className='flex h-10 items-center justify-center text-micro text-gray-11'>
            No data found
          </div>
        )}

        {hasOptions && (
          <div
            className={cn(
              'flex flex-col gap-0.5',
              options[0].description && 'gap-1',
            )}
          >
            {options.map((option) => (
              <div key={option.id} onClick={() => handleClick(option)}>
                <ComboboxOption
                  {...option}
                  isSelected={isSelected(option.id)}
                  variant={variant}
                />
              </div>
            ))}
          </div>
        )}

        {creatable && search && (
          <div onClick={handleCreate}>
            <ComboboxOption
              icon='tabler:plus'
              id='0'
              name={`Create "${search}"`}
            />
          </div>
        )}
      </ScrollArea>
    </Base.Options>
  )
}
