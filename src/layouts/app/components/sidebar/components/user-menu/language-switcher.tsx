import { Menu } from '@/components/base/menu'
import { useLanguage } from '@/hooks/use-language'

export const LanguageSwitcher = () => {
  const { language, languages, setLanguage } = useLanguage()

  return (
    <Menu.Sub icon='material-symbols:translate-rounded' label='Language'>
      {languages.map(({ code, name }) => (
        <Menu.Item
          key={code}
          label={name}
          suffixIcon={language === code ? 'material-symbols:check-rounded' : ''}
          suffixIconClassName='text-primary'
          onClick={() => setLanguage(code)}
        />
      ))}
    </Menu.Sub>
  )
}
