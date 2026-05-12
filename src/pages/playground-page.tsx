import logoMark from '@/assets/logo/mark.png'
import { Button, ButtonIcon } from '@/components/base/button'
import { Title } from '@/components/base/title'

export const PlaygroundPage = () => {
  return (
    <div className='flex h-svh overflow-hidden bg-surface-muted'>
      <div className='hidden w-14 xl:block'>
        <div className='flex size-14 items-center justify-center'>
          <div className='flex size-8 shrink-0 items-center justify-center'>
            <img alt='logo mark' className='size-7' src={logoMark} />
          </div>
        </div>
      </div>

      <div className='flex-1 rounded-l-xl border border-gray-3 bg-surface'>
        <div className='flex h-15 w-full items-center justify-between border-b border-gray-3 pr-4 pl-2 xl:h-13 xl:px-6'>
          <div className='flex items-center gap-2'>
            <ButtonIcon
              ariaLabel='search'
              color='gray'
              icon='tabler:menu-3'
              variant='ghost'
            />
            <Title level={2} title='Forms' />
          </div>

          <div className='flex items-center gap-1'>
            <ButtonIcon
              ariaLabel='search'
              className='rounded-full'
              color='gray'
              icon='tabler:search'
              variant='ghost'
            />
            <ButtonIcon
              ariaLabel='search'
              className='rounded-full'
              color='gray'
              icon='tabler:bell'
              variant='ghost'
            />
            <ButtonIcon
              ariaLabel='search'
              className='rounded-full'
              color='gray'
              icon='tabler:sparkle-2'
              variant='ghost'
            />
          </div>
        </div>

        <div className='flex w-full items-center justify-between p-2 xl:p-6'>
          <div className=''>
            <Button
              className='squircle w-48'
              color='gray'
              icon='tabler:search'
              label='Search'
              variant='outline'
            />
          </div>

          <div className='flex items-center gap-2'>
            <Button
              className='squircle'
              color='gray'
              icon='tabler:cloud-upload'
              label='Upload PO'
              variant='outline'
            />
            <Button className='squircle' icon='tabler:plus' label='New Form' />
          </div>
        </div>
      </div>
    </div>
  )
}
