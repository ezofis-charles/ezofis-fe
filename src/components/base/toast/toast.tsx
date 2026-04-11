import { toast as sonnerToast } from 'sonner'
import { ButtonClose } from '@/components/base/button'
import { Icon } from '@/components/base/icon'

export interface Props {
  description: string
  id: number | string
  title: string
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

export const Toast = ({ description, id, title, variant = 'info' }: Props) => {
  const { className, name } = iconMap[variant]

  return (
    <div className='flex items-start gap-2 rounded-lg border border-gray-4 bg-surface-raised p-4 shadow-xl'>
      <div className='flex size-5 items-center justify-center'>
        <Icon className={className} name={name} />
      </div>

      <div className='mr-3 flex-1'>
        <p className='text-micro/5 font-medium text-gray-13'>{title}</p>
        <p className='text-micro/5 text-gray-11'>{description}</p>
      </div>

      <ButtonClose size='sm' onClick={() => sonnerToast.dismiss(id)} />
    </div>
  )
}
