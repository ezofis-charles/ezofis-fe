import { SegmentGroup as Root } from './segment-group'
import { SegmentGroupItem } from './segment-group-item'

type SegmentGroupType = typeof Root & {
  Item: typeof SegmentGroupItem
}

export const SegmentGroup = Object.assign(Root, {
  Item: SegmentGroupItem,
}) as SegmentGroupType
