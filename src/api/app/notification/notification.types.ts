import { z } from 'zod'

export const NotificationSchema = z.object({
  action: z.string(),
  createdAt: z.iso.datetime(),
  createdBy: z.string(),
  id: z.string(),
  isRead: z.boolean(),
  name: z.string(),
  type: z.string(),
})

export type Notification = z.infer<typeof NotificationSchema>

export const NotificationListRequestSchema = z.object({
  cursor: z.string().nullish(),
  limit: z.number().default(100),
  unreadOnly: z.boolean().default(false),
})

export type NotificationListRequest = z.infer<
  typeof NotificationListRequestSchema
>

export const NotificationGroupSchema = z.object({
  date: z.iso.date(),
  items: z.array(NotificationSchema),
})

export type NotificationGroup = z.infer<typeof NotificationGroupSchema>

export const NotificationListResponseSchema = z.object({
  data: z.array(NotificationGroupSchema),
  nextCursor: z.string().nullish(),
  unreadCount: z.number(),
})

export type NotificationListResponse = z.infer<
  typeof NotificationListResponseSchema
>
