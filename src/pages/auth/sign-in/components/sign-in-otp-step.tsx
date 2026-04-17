import { useEffect } from 'react'
import { Button } from '@/components/base/button'
import { InputPin } from '@/components/base/inputs'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import useResendOtpMutation from '../hooks/use-resend-otp-mutation'
import useVerifyOtpForm from '../hooks/use-verify-otp-form'
import { useSignInStore } from '../stores/use-sign-in-store'

export const SignInOtpStep = () => {
  const { form, handleSubmit, verifyOtpMutation } = useVerifyOtpForm()
  const otpMethod = useSignInStore((state) => state.otpMethod)
  const { count, resendOtpMutation, startCountdown, stopCountdown } =
    useResendOtpMutation()

  useEffect(() => {
    startCountdown()

    return () => {
      stopCountdown()
    }
  })

  const description = () => {
    const methods = {
      email: 'Enter the 6-digit code sent to your email',
      sms: 'Enter the 6-digit code sent to your mobile',
      totp: 'Enter the code from your authenticator app',
    }

    return methods[otpMethod]
  }

  const resendOtp = (e: React.MouseEvent, method: 'email' | 'sms') => {
    e.preventDefault()
    e.stopPropagation()
    resendOtpMutation.mutate({ method })
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description={description()}
        level={1}
        title='Two-Step Verification'
      />

      <form className='space-y-6' onSubmit={handleSubmit}>
        <form.Field
          name='otp'
          children={(field) => (
            <InputPin
              error={field.state.meta.errors.length > 0}
              length={6}
              placeholder='0'
              value={field.state.value}
              onChange={field.handleChange}
            />
          )}
        />

        <div className='space-y-2'>
          <form.Subscribe
            selector={(state) => [state.canSubmit]}
            children={([canSubmit]) => (
              <Button
                className='w-full justify-center'
                disabled={!canSubmit}
                label='Verify'
                loading={verifyOtpMutation.isPending}
                size='lg'
                type='submit'
              />
            )}
          />

          {otpMethod !== 'totp' && (
            <Button
              className='w-full justify-center font-normal text-gray-11 hover:bg-transparent hover:underline'
              color='gray'
              disabled={count !== 0}
              label={count === 0 ? 'Resend link' : `Resend link in ${count}s`}
              loading={resendOtpMutation.isPending}
              variant='ghost'
              onClick={(e) => resendOtp(e, otpMethod)}
            />
          )}

          {verifyOtpMutation.isError && (
            <div className='text-center text-red-11'>
              {verifyOtpMutation.error?.message}
            </div>
          )}
        </div>
      </form>
    </AnimatePop>
  )
}
