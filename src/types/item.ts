import { z } from 'zod'

export const ItemSchema = z.object({
  id: z.string(),
  name: z.string(),
})

export type Item = z.infer<typeof ItemSchema>

export const ItemListSchema = z.object({
  data: z.array(ItemSchema),
  page: z.number(),
  pageSize: z.number(),
  totalCount: z.number(),
})

export type ItemList = z.infer<typeof ItemListSchema>
