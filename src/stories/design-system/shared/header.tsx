import { ThemeSwitcher } from '@/components/base/theme-switcher'
import { Title } from '@/components/base/title'

interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <div className='mb-12 flex items-center justify-between'>
      <Title level={1} title={title} />
      <ThemeSwitcher />
    </div>
  )
}
