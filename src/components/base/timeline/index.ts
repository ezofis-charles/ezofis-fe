import { Timeline as Root } from './timeline'
import { TimelineItem } from './timeline-item'

type TimelineType = typeof Root & {
  Item: typeof TimelineItem
}

export const Timeline = Object.assign(Root, {
  Item: TimelineItem,
}) as TimelineType
