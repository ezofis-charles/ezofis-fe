import { useMatches } from '@tanstack/react-router'
import { Title } from '@/components/base/title'

export const PageTitle = () => {
  const matches = useMatches()
  const current = matches.at(-1)
  const pageTitle = current?.staticData?.pageTitle ?? 'Untitled'

  return (
    <div className='flex items-center gap-4'>
      <Title level={2} title={pageTitle} />
    </div>
  )
}
