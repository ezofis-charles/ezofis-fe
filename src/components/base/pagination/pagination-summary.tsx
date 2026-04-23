interface Props {
  currentPage: number
  pageSize: number
  totalItems: number
  itemLabel?: string
}

export const PaginationSummary = ({
  currentPage,
  itemLabel,
  pageSize,
  totalItems,
}: Props) => {
  const from = (currentPage - 1) * pageSize + 1
  const to = Math.min(from + pageSize - 1, totalItems)

  return (
    <div className='hidden text-14 font-medium text-gray-11 select-none sm:block xl:text-13'>
      Showing {from} - {to} of {totalItems} {itemLabel}
    </div>
  )
}
