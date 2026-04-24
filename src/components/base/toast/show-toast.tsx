import { toast as sonnerToast } from 'sonner'
import type { ToastProps } from './toast'
import { Toast } from './toast'

export const showToast = (toast: Omit<ToastProps, 'id'>) => {
  return sonnerToast.custom((id) => (
    <Toast
      description={toast.description}
      id={id}
      title={toast.title}
      variant={toast.variant}
    />
  ))
}
