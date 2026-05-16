import { Icon } from '@/components/base/icon'
import { Menu } from '@/components/base/menu'
import { useLanguage } from '@/hooks/use-language'

export const LanguageSwitcher = () => {
  const { language, languages, setLanguage } = useLanguage()

  return (
    <Menu
      position='top-end'
      withinPortal={false}
      target={
        <div className='flex items-center gap-1'>
          <div className='flex size-9 items-center justify-center'>
            <Icon name='material-symbols:translate-rounded' />
          </div>

          <div className='min-w-0 flex-1 font-medium whitespace-nowrap text-gray-11'>
            Language
          </div>

          <Icon name='tabler:chevron-right' />
        </div>
      }
    >
      {languages.map(({ code, name }) => (
        <Menu.Item
          key={code}
          label={name}
          suffixIcon={language === code ? 'tabler:check' : ''}
          suffixIconClassName='text-primary-11'
          onClick={() => setLanguage(code)}
        />
      ))}
    </Menu>
  )
}
