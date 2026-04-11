import { EmptyState } from '@/components/base/empty-state'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const EmptyStateStory = () => {
  return (
    <>
      <Header title='Empty State' />

      <Section title='Default'>
        <EmptyState
          description='Try changing the search query or filter options.'
          icon='tabler:folder-search'
          primaryActionLabel='Reset Filters'
          secondaryActionLabel='Try Again'
          title='No results found'
        />
      </Section>
    </>
  )
}
