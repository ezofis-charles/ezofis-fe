import { Title } from '@/components/base/title'
import { Header } from './shared/header'

export const TypographyStory = () => {
  return (
    <>
      <Header title='Typography' />

      <div className='space-y-4'>
        <Title level={1} title='Title 1' />
        <Title level={2} title='Title 2' />
        <Title level={3} title='Title 3' />
        <p>Body</p>
      </div>
    </>
  )
}
