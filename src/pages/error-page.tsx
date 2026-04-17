import { useRouter } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { Logo } from '@/components/common/logo'

export const ErrorPage = () => {
  const router = useRouter()

  const goToHome = () => {
    router.navigate({ to: '/' })
  }

  return (
    <div className='flex min-h-svh justify-center bg-surface'>
      <div className='mt-[max(0px,calc(50svh-264px))] w-72 space-y-6 py-12'>
        <Logo className='justify-center' hideText />

        <Title
          className='text-center'
          description="We're having some trouble loading this page. Please try again later."
          level={1}
          title='Something went wrong'
        />

        <Button
          className='w-full justify-center'
          label='Go to home'
          size='lg'
          onClick={goToHome}
        />
      </div>
    </div>
  )
}
