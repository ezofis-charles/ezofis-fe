import type { ChangeEvent } from 'react'
import { Combobox as Base } from '@mantine/core'
import { Icon } from '@/components/base/icon'

interface Props {
  search: string
  className?: string
  placeholder?: string
  onSearch: (search: string) => void
}

export const ComboboxSearch = ({
  className,
  placeholder = 'Search',
  search,
  onSearch,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onSearch(e.currentTarget.value)

  const _leftSection = <Icon className='text-gray-8' name='tabler:search' />

  return (
    <Base.Search
      className={className}
      leftSection={_leftSection}
      leftSectionWidth={40}
      placeholder={placeholder}
      value={search}
      classNames={{
        input:
          'm-0 h-9 w-full border-gray-3 bg-transparent placeholder:text-gray-8',
      }}
      onChange={handleChange}
    />
  )
}
