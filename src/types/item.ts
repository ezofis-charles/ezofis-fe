import { z } from 'zod'

export const ItemSchema = z.object({
  createdAt: z.iso.datetime(),
  createdBy: z.string(),
  id: z.string(),
  name: z.string(),
  updatedAt: z.iso.datetime(),
  updatedBy: z.string(),
})

export type Item = z.infer<typeof ItemSchema>

export const ItemListSchema = z.object({
  data: z.array(ItemSchema),
  page: z.number(),
  pageSize: z.number(),
  totalCount: z.number(),
})

export type ItemList = z.infer<typeof ItemListSchema>
