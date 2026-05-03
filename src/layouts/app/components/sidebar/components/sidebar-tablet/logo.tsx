import logoMark from '@/assets/logo/mark.png'
import logoText from '@/assets/logo/text.png'

export const Logo = () => {
  return (
    <div className='flex items-center gap-0.5 overflow-hidden'>
      <div className='flex size-8 shrink-0 items-center justify-center'>
        <img alt='logo mark' className='size-7' src={logoMark} />
      </div>

      <img alt='logo text' className='h-6 w-auto max-w-none' src={logoText} />
    </div>
  )
}
