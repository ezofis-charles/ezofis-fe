import { z } from 'zod'
import { ItemListSchema, ItemSchema } from './item'

export const OptionSchema = ItemSchema.extend({
  description: z.string().optional(),
  disabled: z.boolean().optional(),
})

export type Option = z.infer<typeof OptionSchema>

export const OptionListSchema = ItemListSchema.extend({
  data: z.array(OptionSchema),
})

export type OptionList = z.infer<typeof OptionListSchema>
