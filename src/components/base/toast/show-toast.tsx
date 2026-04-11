import { toast as sonnerToast } from 'sonner'
import type { Props } from './toast'
import { Toast } from './toast'

export const showToast = (toast: Omit<Props, 'id'>) => {
  return sonnerToast.custom((id) => (
    <Toast
      description={toast.description}
      id={id}
      title={toast.title}
      variant={toast.variant}
    />
  ))
}
