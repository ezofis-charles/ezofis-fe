import { usePagination, useViewportSize } from '@mantine/hooks'
import { Button, ButtonIcon } from '@/components/base/button'
import { SCREEN_SIZE } from '@/constants'
import { cn } from '@/utils/cn'

interface Props {
  page: number
  totalPages: number
  onPageChange: (value: number) => void
}

export const PaginationControls = ({
  page,
  totalPages,
  onPageChange,
}: Props) => {
  const { width } = useViewportSize()
  const { next, previous, range, setPage } = usePagination({
    page,
    siblings: width > SCREEN_SIZE.SM ? 1 : 0,
    total: totalPages,
    onChange: onPageChange,
  })

  return (
    <div className='flex justify-center md:justify-start xl:justify-center'>
      <div className='flex items-center gap-2'>
        <ButtonIcon
          color='gray'
          disabled={page === 1}
          icon='tabler:chevron-left'
          variant='ghost'
          onClick={previous}
        />
        {range.map((_page, index) =>
          _page === 'dots' ? (
            <ButtonIcon
              color='gray'
              icon='tabler:dots'
              key={index}
              variant='ghost'
              disabled
            />
          ) : (
            <Button
              aria-current={_page === page ? 'page' : undefined}
              color='gray'
              key={index}
              label={_page.toString()}
              variant={_page === page ? 'subtle' : 'ghost'}
              className={cn(
                'min-w-8 justify-center p-2 font-medium',
                _page === page && 'text-gray-12',
              )}
              onClick={() => setPage(_page)}
            />
          ),
        )}
        <ButtonIcon
          color='gray'
          disabled={page === totalPages}
          icon='tabler:chevron-right'
          variant='ghost'
          onClick={next}
        />
      </div>
    </div>
  )
}
