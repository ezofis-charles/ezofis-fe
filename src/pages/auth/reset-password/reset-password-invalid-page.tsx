import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'

export const ResetPasswordInvalidPage = () => {
  const navigate = useNavigate()

  const backToSignIn = () => {
    navigate({ to: '/sign-in' })
  }

  return (
    <>
      <Title
        className='text-center'
        description='It may be broken, or the page may have been removed. Please check the URL and try again.'
        level={1}
        title='The link is invalid'
      />

      <Button
        className='w-full justify-center'
        label='Back to sign in'
        size='lg'
        onClick={backToSignIn}
      />
    </>
  )
}
