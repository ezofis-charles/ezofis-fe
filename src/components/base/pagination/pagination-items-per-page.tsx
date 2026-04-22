import { Button } from '@/components/base/button'
import { Menu } from '@/components/base/menu'
import { cn } from '@/utils/cn'

interface Props {
  pageSize: number
  className?: string
  itemLabel?: string
  onPageSizeChange: (value: number) => void
}

const options = [5, 10, 20, 30, 50, 100]

export const PaginationItemsPerPage = ({
  className,
  itemLabel,
  pageSize,
  onPageSizeChange,
}: Props) => {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-2 select-none',
        className,
      )}
    >
      <div className='text-14 text-gray xl:text-13'>{itemLabel} per page:</div>
      <Menu
        width='target'
        target={
          <Button
            color='gray'
            label={pageSize.toString()}
            suffixIcon='tabler:chevron-down'
            suffixIconClassName='text-gray-9'
            variant='outline'
          />
        }
      >
        {options.map((option) => (
          <Menu.Item
            key={option}
            label={option.toString()}
            onClick={() => onPageSizeChange(option)}
          />
        ))}
      </Menu>
    </div>
  )
}
