import { Button } from '@/components/base/button'
import { InputPin } from '@/components/base/inputs'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import useVerifyOtpForm from '../hooks/use-verify-otp-form'
import { useSignInStore } from '../stores/use-sign-in-store'

export const SignInOtpStep = () => {
  const setSignInMethod = useSignInStore((state) => state.setSignInMethod)
  const setStep = useSignInStore((state) => state.setStep)
  const { form, handleSubmit, verifyOtpMutation } = useVerifyOtpForm()

  const handleBackToSignInClick = () => {
    setSignInMethod('email')
    setStep('method')
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='Enter the 6-digit code sent to your email'
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

        <div className='space-y-4'>
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

          <div
            className='cursor-pointer text-center hover:underline'
            onClick={handleBackToSignInClick}
          >
            Resend link
          </div>
        </div>
      </form>
    </AnimatePop>
  )
}
