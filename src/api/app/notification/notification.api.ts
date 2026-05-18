import { axiosInstance } from '@/api/axios'
import type {
  NotificationListRequest,
  NotificationListResponse,
} from './notification.types'
import { NotificationListResponseSchema } from './notification.types'

export async function notificationList(
  payload: NotificationListRequest,
): Promise<NotificationListResponse> {
  const { data } = await axiosInstance.post('/c/94e8-d735-4879-9b6f', payload, {
    schema: NotificationListResponseSchema,
  })

  return data
}
