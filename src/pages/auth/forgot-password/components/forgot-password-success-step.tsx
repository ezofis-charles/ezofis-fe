import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Button } from '@/components/base/button'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import useResendLinkMutation from '../hooks/use-resend-link-mutation'

export const ForgotPasswordSuccessStep = () => {
  const { count, resendLinkMutation, startCountdown, stopCountdown } =
    useResendLinkMutation()

  useEffect(() => {
    startCountdown()

    return () => {
      stopCountdown()
    }
  })

  const resendResetLink = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    resendLinkMutation.mutate({ method: 'email' })
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description="We've sent a reset link to your email. Follow the instructions to set a new password."
        level={1}
        title='Check your email'
      />

      <div className='space-y-4'>
        <Button
          className='w-full justify-center'
          disabled={count !== 0}
          label={count === 0 ? 'Resend link' : `Resend link in ${count}s`}
          loading={resendLinkMutation.isPending}
          size='lg'
          onClick={resendResetLink}
        />

        <Link
          className='block cursor-pointer text-center hover:underline'
          to='/sign-in'
        >
          Go to sign in
        </Link>
      </div>
    </AnimatePop>
  )
}
