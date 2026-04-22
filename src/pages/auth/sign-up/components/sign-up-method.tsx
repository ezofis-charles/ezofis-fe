import { Link } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { useSignUpStore } from '../stores/use-sign-up-store'

export const SignUpMethod = () => {
  const isInitialRender = useSignUpStore((state) => state.isInitialRender)
  const setSignUpMethod = useSignUpStore((state) => state.setSignUpMethod)
  const setIsInitialRender = useSignUpStore((state) => state.setIsInitialRender)
  const setStep = useSignUpStore((state) => state.setStep)

  const continueWithEmail = () => {
    setSignUpMethod('email')
    setStep('form')
    setIsInitialRender(false)
  }

  return (
    <AnimatePop className='space-y-6' disableInitialAnimation={isInitialRender}>
      <Title
        className='text-center'
        level={1}
        title='Create Your Account'
        customDescription={
          <p className='text-14 text-pretty text-gray xl:text-13/6'>
            By signing up, you agree to our{' '}
            <Link
              className='cursor-pointer hover:underline'
              to='/terms-of-service'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              className='cursor-pointer hover:underline'
              to='/privacy-policy'
            >
              Privacy Policy
            </Link>
            .
          </p>
        }
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
          onClick={() => setSignUpMethod('google')}
        />
        <Button
          className='w-full justify-center'
          color='gray'
          label='Continue with Microsoft'
          size='lg'
          variant='outline'
          onClick={() => setSignUpMethod('microsoft')}
        />
      </div>

      <Link
        className='block cursor-pointer text-center hover:underline'
        to='/sign-in'
      >
        Already have an account? Sign in
      </Link>
    </AnimatePop>
  )
}
