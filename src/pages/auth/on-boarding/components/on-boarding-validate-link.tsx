import { useRouter, useSearch } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Button } from '@/components/base/button'
import { IconSpinner } from '@/components/base/icon'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import useValidateLinkMutation from '../hooks/use-validate-link-mutation'

export const OnBoardingValidateLink = () => {
  const { token } = useSearch({ from: '/_auth/on-boarding' })
  const { isError, isPending, mutate } = useValidateLinkMutation()
  const router = useRouter()

  useEffect(() => mutate({ token }), [mutate, token])

  const goToSignIn = () => {
    router.navigate({ to: '/sign-in' })
  }

  return (
    <>
      {isPending && (
        <div className='flex h-20 items-center justify-center'>
          <IconSpinner />
        </div>
      )}

      {isError && (
        <AnimatePop className='space-y-6'>
          <Title
            className='text-center'
            description='The reset link you used is either invalid or has expired. Please request a new one.'
            level={1}
            title='Invalid link'
          />

          <Button
            className='w-full justify-center'
            label='Go to sign in'
            size='lg'
            onClick={goToSignIn}
          />
        </AnimatePop>
      )}
    </>
  )
}
