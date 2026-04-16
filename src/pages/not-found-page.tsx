import { useCanGoBack, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { Logo } from '@/components/common/logo'

export const NotFoundPage = () => {
  const router = useRouter()
  const canGoBack = useCanGoBack()

  const goToHome = () => {
    router.navigate({ to: '/' })
  }

  return (
    <div className='flex min-h-svh justify-center bg-surface'>
      <div className='mt-[max(0px,calc(50svh-264px))] w-72 space-y-6 py-12'>
        <Logo className='justify-center' hideText />

        <Title
          className='text-center'
          description="The page you're looking for doesn't exist or may have been moved."
          level={1}
          title='Page not found'
        />

        <div className='space-y-4'>
          <Button
            className='w-full justify-center'
            label='Go to home'
            size='lg'
            onClick={goToHome}
          />

          {canGoBack && (
            <Button
              className='w-full justify-center font-normal text-gray-11 hover:bg-transparent hover:underline'
              color='gray'
              label='Go back'
              size='lg'
              variant='ghost'
              onClick={() => router.history.back()}
            />
          )}
        </div>
      </div>
    </div>
  )
}
