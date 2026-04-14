import { useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/base/button'
import { InputPassword, InputText } from '@/components/base/inputs'
import { Title } from '@/components/base/title'
import { AnimatePop } from '@/components/common/animated/animate-pop'
import { getFieldError } from '@/utils/form'
import useSignInForm from '../hooks/use-sign-in-form'
import { useSignInStore } from '../stores/use-sign-in-store'

export const SignInFormStep = () => {
  const setStep = useSignInStore((state) => state.setStep)
  const navigate = useNavigate()
  const { form, handleSubmit, signInMutation } = useSignInForm()

  const forgotPassword = () => {
    navigate({ to: '/forgot-password' })
    setStep('method')
  }

  return (
    <AnimatePop className='space-y-6'>
      <Title
        className='text-center'
        description='Enter your email and password to continue'
        level={1}
        title='Welcome Back'
      />

      <form className='space-y-6' onSubmit={handleSubmit}>
        <div className='space-y-4'>
          <form.Field
            name='email'
            children={(field) => (
              <InputText
                error={getFieldError(field.state.meta.errors)}
                label='Email'
                placeholder='Enter your email'
                size='md'
                value={field.state.value}
                onChange={field.handleChange}
              />
            )}
          />

          <form.Field
            name='password'
            children={(field) => (
              <InputPassword
                error={getFieldError(field.state.meta.errors)}
                label='Password'
                placeholder='Enter your password'
                size='md'
                value={field.state.value}
                onChange={field.handleChange}
              />
            )}
          />
        </div>

        <div className='space-y-4'>
          <form.Subscribe
            selector={(state) => [state.canSubmit]}
            children={([canSubmit]) => (
              <Button
                className='w-full justify-center'
                disabled={!canSubmit}
                label='Sign in'
                loading={signInMutation.isPending}
                size='lg'
                type='submit'
              />
            )}
          />

          <div
            className='cursor-pointer text-center hover:underline'
            onClick={forgotPassword}
          >
            Forgot password?
          </div>

          {signInMutation.isError && (
            <div className='text-center text-red-11'>
              {signInMutation.error?.message}
            </div>
          )}
        </div>
      </form>
    </AnimatePop>
  )
}
