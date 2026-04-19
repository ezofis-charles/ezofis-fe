import { useState } from 'react'
import { SegmentGroup } from '@/components/base/segment-group'
import { Header } from '../shared/header'
import { Section } from '../shared/section'

export const SegmentGroupStory = () => {
  const [value, setValue] = useState<null | string>('Left')

  return (
    <>
      <Header title='Segment Group' />

      <Section title='Default'>
        <SegmentGroup value={value} onChange={setValue}>
          <SegmentGroup.Item label='Left' value='Left' />
          <SegmentGroup.Item label='Center' value='Center' />
          <SegmentGroup.Item label='Right' value='Right' />
        </SegmentGroup>
      </Section>

      <Section title='With Icon'>
        <SegmentGroup value={value} onChange={setValue}>
          <SegmentGroup.Item
            icon='tabler:align-left'
            label='Left'
            value='Left'
          />
          <SegmentGroup.Item
            icon='tabler:align-center'
            label='Center'
            value='Center'
          />
          <SegmentGroup.Item
            icon='tabler:align-right'
            label='Right'
            value='Right'
          />
        </SegmentGroup>
      </Section>

      <Section title='Icon Only'>
        <SegmentGroup value={value} onChange={setValue}>
          <SegmentGroup.Item icon='tabler:align-left' value='Left' />
          <SegmentGroup.Item icon='tabler:align-center' value='Center' />
          <SegmentGroup.Item icon='tabler:align-right' value='Right' />
        </SegmentGroup>
      </Section>

      <Section title='Disabled'>
        <SegmentGroup value={value} disabled onChange={setValue}>
          <SegmentGroup.Item label='Left' value='Left' />
          <SegmentGroup.Item label='Center' value='Center' />
          <SegmentGroup.Item label='Right' value='Right' />
        </SegmentGroup>
      </Section>
    </>
  )
}
