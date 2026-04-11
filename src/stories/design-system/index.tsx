import { Link } from '@tanstack/react-router'
import { Header } from './shared/header'

const routes = [
  {
    label: 'Colors',
    route: '/design-system/colors',
  },
  {
    label: 'Typography',
    route: '/design-system/typography',
  },
  {
    label: 'Components',
    route: '/design-system/components',
  },
]

export const IndexStory = () => {
  return (
    <>
      <Header title='Design System' />
      <ul className='space-y-4'>
        {routes.map((item) => (
          <li key={item.route}>
            <Link
              className='text-micro/7 font-medium text-gray-11 transition-colors hover:text-gray-13'
              to={item.route}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
