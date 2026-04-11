import { Accordion as Root } from './accordion'
import { AccordionItem } from './accordion-item'

type AccordionType = typeof Root & {
  Item: typeof AccordionItem
}

export const Accordion = Object.assign(Root, {
  Item: AccordionItem,
}) as AccordionType
