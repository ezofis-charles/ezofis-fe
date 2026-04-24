import { toast as sonnerToast } from 'sonner'
import { ButtonClose } from '@/components/base/button'
import { Icon } from '@/components/base/icon'
import { Title } from '../title'

export interface ToastProps {
  id: number | string
  title: string
  description?: string
  variant?: 'error' | 'info' | 'loading' | 'success' | 'warning'
}

const iconMap = {
  error: { className: 'text-red-11', name: 'tabler:alert-hexagon' },
  info: { className: 'text-primary-11', name: 'tabler:info-circle' },
  loading: {
    className: 'text-gray-11 animate-spin',
    name: 'fa:spinner',
  },
  success: { className: 'text-green-11', name: 'tabler:circle-check' },
  warning: { className: 'text-orange-11', name: 'tabler:alert-triangle' },
}

export const Toast = ({
  description,
  id,
  title,
  variant = 'info',
}: ToastProps) => {
  const { className, name } = iconMap[variant]

  return (
    <div className='relative flex items-start gap-2 overflow-hidden rounded-lg border border-gray-4 bg-surface p-4 shadow-xl'>
      <div className='flex size-5 items-center justify-center'>
        <Icon className={className} name={name} />
      </div>

      <Title
        className='mr-2 flex-1'
        description={description}
        descriptionClassName='text-gray'
        level={3}
        title={title}
      />

      <ButtonClose
        className='size-5 xl:size-5'
        size='sm'
        onClick={() => sonnerToast.dismiss(id)}
      />
    </div>
  )
}
