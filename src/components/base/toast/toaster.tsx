import { Toaster as Base } from 'sonner'

export const Toaster = () => {
  return (
    <Base
      position='bottom-right'
      toastOptions={{ duration: 5000 }}
      visibleToasts={5}
    />
  )
}
