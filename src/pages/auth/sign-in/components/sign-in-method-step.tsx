import { Link } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { useSignInStore } from '../stores/use-sign-in-store'

export const SignInMethodStep = () => {
  const setSignInMethod = useSignInStore((state) => state.setSignInMethod)
  const setStep = useSignInStore((state) => state.setStep)
  const setIsInitialRender = useSignInStore((state) => state.setIsInitialRender)
  const isInitialRender = useSignInStore((state) => state.isInitialRender)

  const continueWithEmail = () => {
    setSignInMethod('email')
    setStep('form')
    setIsInitialRender(false)
  }

  return (
    <AnimatePop className='space-y-6' disableInitialAnimation={isInitialRender}>
      <Title
        className='text-center'
        description='Choose how you want to continue'
        level={1}
        title='Sign in to your account'
      />

      <div className='w-full space-y-4'>
        <Button
          className='w-full justify-center'
          label='Continue with Email'
          size='lg'
          onClick={continueWithEmail}
        />
        <Button
          className='w-full justify-center'
          color='gray'
          label='Continue with Google'
          size='lg'
          variant='outline'
          onClick={() => setSignInMethod('google')}
        />
        <Button
          className='w-full justify-center'
          color='gray'
          label='Continue with Microsoft'
          size='lg'
          variant='outline'
          onClick={() => setSignInMethod('microsoft')}
        />
      </div>

      <Link
        className='block cursor-pointer text-center hover:underline'
        to='/sign-up'
      >
        Don't have an account? Sign up
      </Link>
    </AnimatePop>
  )
}
