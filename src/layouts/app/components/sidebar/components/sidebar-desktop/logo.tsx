import logoMark from '@/assets/logo/mark.png'
import logoText from '@/assets/logo/text.png'
import { AnimatePresence } from './animate-presence'

export const Logo = () => {
  return (
    <div className='flex h-12 items-center gap-0.5 overflow-hidden px-2'>
      <div className='flex size-8 shrink-0 items-center justify-center'>
        <img alt='logo mark' className='size-7' src={logoMark} />
      </div>

      <AnimatePresence>
        <img alt='logo text' className='h-6 w-auto max-w-none' src={logoText} />
      </AnimatePresence>
    </div>
  )
}
