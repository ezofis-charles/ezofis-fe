import { z } from 'zod'
import { ItemListSchema } from './item'

export const OptionSchema = z.object({
  description: z.string().optional(),
  disabled: z.boolean().optional(),
  id: z.string(),
  name: z.string(),
})

export type Option = z.infer<typeof OptionSchema>

export const OptionListSchema = ItemListSchema.extend({
  data: z.array(OptionSchema),
})

export type OptionList = z.infer<typeof OptionListSchema>
