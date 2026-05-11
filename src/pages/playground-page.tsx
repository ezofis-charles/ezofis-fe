import logoMark from '@/assets/logo/mark.png'
import { Avatar } from '@/components/base/avatar'
import { Button, ButtonIcon } from '@/components/base/button'
import { Title } from '@/components/base/title'

export const PlaygroundPage = () => {
  return (
    <div className='flex min-h-svh'>
      <div className='hidden w-14 bg-surface-muted xl:block'>
        <div className='flex size-14 items-center justify-center'>
          <div className='flex size-8 shrink-0 items-center justify-center'>
            <img alt='logo mark' className='size-7' src={logoMark} />
          </div>
        </div>
      </div>

      <div className='flex-1 border-l border-gray-3'>
        <div className='flex h-15 w-full items-center justify-between border-b border-gray-3 pr-4 pl-2 xl:h-14 xl:px-6'>
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
            <div className='ml-1'>
              <Avatar initials='JD' size={30} />
            </div>
          </div>

          <div className='hidden items-center gap-2'>
            <Button
              className='squircle hidden'
              color='gray'
              icon='tabler:cloud-upload'
              label='Upload PO'
              variant='outline'
            />
            <ButtonIcon
              ariaLabel='search'
              className='hidden shadow-xs/5 xl:flex'
              color='gray'
              icon='tabler:search'
              variant='outline'
            />
            <ButtonIcon
              ariaLabel='search'
              className='hidden shadow-xs/5 xl:flex'
              color='gray'
              icon='tabler:sparkle-2'
              variant='outline'
            />
            <Button className='squircle' icon='tabler:plus' label='New Form' />
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
