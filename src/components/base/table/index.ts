import { Table as Root } from './table'
import { Tbody } from './tbody'
import { Td } from './td'
import { Th } from './th'
import { Thead } from './thead'
import { Tr } from './tr'

type TableType = typeof Root & {
  Tbody: typeof Tbody
  Td: typeof Td
  Th: typeof Th
  Thead: typeof Thead
  Tr: typeof Tr
}

export const Table = Object.assign(Root, {
  Tbody: Tbody,
  Td: Td,
  Th: Th,
  Thead: Thead,
  Tr: Tr,
}) as TableType
